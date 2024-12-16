import { google } from "googleapis";
import path from "path";
import fs from "fs";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const form = formidable({
      uploadDir: path.join(process.cwd(), "uploads"),
      keepExtensions: true,
    });

    if (!fs.existsSync(form.uploadDir)) {
      fs.mkdirSync(form.uploadDir, { recursive: true });
    }

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Error parsing the form:", err);
        return res.status(500).json({ error: "Failed to parse form data" });
      }

      try {
        const {
          name,
          contact,
          email,
          position,
          location,
          exp_year,
          exp_month,
          previous_employer,
          qualification,
          college,
          description,
        } = fields;

        const formFields = [
          String(name || ""),
          String(contact || ""),
          String(email || ""),
          String(position || ""),
          String(location || ""),
          String(exp_year || ""),
          String(exp_month || ""),
          String(previous_employer || ""),
          String(qualification || ""),
          String(college || ""),
          String(description || ""),
        ];

        // Google API authentication
        const credentialsPath = path.join(
          process.cwd(),
          "config/thermal-origin-444510-k6-7e18306874b1.json"
        );
        const credentials = JSON.parse(
          fs.readFileSync(credentialsPath, "utf8")
        );

        const auth = new google.auth.GoogleAuth({
          credentials,
          scopes: [
            "https://www.googleapis.com/auth/drive",
            "https://www.googleapis.com/auth/spreadsheets",
          ],
        });

        const drive = google.drive({ version: "v3", auth });
        const sheets = google.sheets({ version: "v4", auth });

        const spreadsheetId = "1NrZkrkjQrBlf-9jXDSd4IB_yox_L_RXvW2Qg6Jsl-FY";
        const range = "Sheet1!A1:L";

        // Fetch existing data to check for duplicates
        const response = await sheets.spreadsheets.values.get({
          spreadsheetId,
          range,
        });

        const existingData = response.data.values || [];
        const mandatoryFields = [0, 1, 2, 3, 4];
        const isDuplicate = existingData.some((row) =>
          mandatoryFields.every((index) => row[index] === formFields[index])
        );

        if (isDuplicate) {
          console.log("Duplicate data found. Skipping insertion.");
          return res
            .status(409)
            .json({ message: "You've already applied for this job." });
        }

        const uploadedFilePath = files.resume[0]?.filepath;
        const uploadedFileName = files.resume[0]?.originalFilename;

        if (!uploadedFilePath || !uploadedFileName) {
          return res.status(400).json({ error: "Resume file is required" });
        }

        const driveResponse = await drive.files.create({
          requestBody: {
            name: uploadedFileName,
            parents: ["1xshJdHJYOaq9LX_1IzRrpH2C2WbKojOx"],
          },
          media: {
            mimeType: files.resume[0]?.mimetype,
            body: fs.createReadStream(uploadedFilePath),
          },
        });

        const fileId = driveResponse.data.id;

        await drive.permissions.create({
          fileId,
          requestBody: {
            role: "reader",
            type: "anyone",
          },
        });

        const fileLink = `https://drive.google.com/uc?id=${fileId}&export=download`;

        const newData = [
          String(name || ""),
          String(contact || ""),
          String(email || ""),
          String(position || ""),
          String(location || ""),
          String(exp_year || ""),
          String(exp_month || ""),
          String(previous_employer || ""),
          String(qualification || ""),
          String(college || ""),
          String(description || ""),
          fileLink,
        ];

        await sheets.spreadsheets.values.append({
          spreadsheetId,
          range: "Sheet1!A1",
          valueInputOption: "RAW",
          requestBody: {
            values: [newData],
          },
        });

        fs.unlinkSync(uploadedFilePath);

        res.status(200).json({ message: "Data saved successfully" });
      } catch (error) {
        console.error("Error processing the request:", error);
        res.status(500).json({ error: "Failed to save data" });
      }
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

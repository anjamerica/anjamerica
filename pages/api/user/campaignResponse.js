import { google } from "googleapis";
import path from "path";
import fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const {
        name,
        contact,
        email,
        location,
        description,
        qualification,
        interested_status,
      } = req.body;

      const formFields = [
        String(name || ""),
        String(email || ""),
        String(contact || ""),
        String(location || ""),
        String(qualification || ""),
        String(interested_status || ""),
        String(description || ""),
      ];

      console.log("====================================");
      console.log(formFields);
      console.log("====================================");
      // Google API authentication
      const credentialsPath = path.join(
        process.cwd(),
        process.env.GDRIVE_ACCESS_FILE_LOCATION
      );
      const credentials = JSON.parse(fs.readFileSync(credentialsPath, "utf8"));

      const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: "v4", auth });

      const spreadsheetId =
        process.env.GOOGLE_SPREAD_SHEET_CAMPAIGN_RESPONSE_ID;
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
        return res
          .status(409)
          .json({ message: "You've already applied for this job." });
      }

      // Append new data to the sheet
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: "Sheet1!A1",
        valueInputOption: "RAW",
        requestBody: {
          values: [formFields],
        },
      });

      res.status(200).json({ message: "Data saved successfully" });
    } catch (error) {
      console.error("Error processing the request:", error);
      res.status(500).json({ error: "Failed to save data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

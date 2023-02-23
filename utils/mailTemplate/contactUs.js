export const contactUs = (
  first_name,
  mobile_number,
  email,
  description,
  message
) => {
  return `<html>
    <head>
      <title></title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <style type="text/css">
        @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
                                  /* CLIENT-SPECIFIC STYLES */
                                  body{
                                    overflow-y: auto;
                                  }
                                  table,
                                  td,
                                  a {
                                      -webkit - text - size - adjust: 100%;
                                  -ms-text-size-adjust: 100%;
              }
  
                                  table,
                                  td {
                                      mso - table - lspace: 0pt;
                                  mso-table-rspace: 0pt;
              }
  
                                  img {
                                      -ms - interpolation - mode: bicubic;
              }
  
                                  /* RESET STYLES */
                                  img {
                                      border: 0;
                                  height: auto;
                                  line-height: 100%;
                                  outline: none;
                                  text-decoration: none;
              }
  
                                  table {
                                      border - collapse: collapse !important;
              }
  
                                  body {
                                      height: 100% !important;
                                  margin: 0 !important;
                                  padding: 0 !important;
                                  width: 100% !important;
              }
  
                                  /* iOS BLUE LINKS */
                                  a[x-apple-data-detectors] {
                                      color: inherit !important;
                                  text-decoration: none !important;
                                  font-size: inherit !important;
                                  font-family: inherit !important;
                                  font-weight: inherit !important;
                                  line-height: inherit !important;
              }
  
                                  /* MOBILE STYLES */
                                  @media screen and (max-width:600px) {
                                      h1 {
                                      font - size: 32px !important;
                                  line-height: 32px !important;
                  }
              }
  
                                  /* ANDROID CENTER FIX */
                                  div[style*="margin: 16px 0;"] {
                                      margin: 0 !important;
              }
      </style>
    </head>
  
    <body
      style="
        background-color: #ffffff;
        margin: 0 !important;
        padding: 0 !important;
      "
    >
      <!-- HIDDEN PREHEADER TEXT -->
      <div
        style="
          display: none;
          font-size: 1px;
          color: #fefefe;
          line-height: 1px;
          max-height: 0px;
          max-width: 0px;
          opacity: 0;
          overflow: hidden;
        "
      ></div>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td bgcolor="#0339D9" align="center">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="max-width: 600px"
            >
              <tr>
                <td
                  align="center"
                  valign="top"
                  style="padding: 40px 10px 0px 10px"
                ></td>
              </tr>
            </table>
          </td>
        </tr>
  
        <tr>
          <td bgcolor="#0339D9" align="center" style="padding: 0px 5px 0px 5px">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="max-width: 550px"
            >
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="center"
                  valign="top"
                  style="
                    padding: 20px 20px 20px 20px;
                    /* border-radius: 4px 4px 0px 0px; */
                    color: #111111;
                    font-size: 48px;
                    font-weight: 400;
                    letter-spacing: 4px;
                    line-height: 48px;
                    align-self: center;
                  "
                >
                  <img
                  src="https://www.linkpicture.com/q/Anj-logo.png"
                    width="160"
                    style="display: block; border: 0px; align-self: center;height:auto;"
                  />
                </td>
              </tr>
            </table>
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="max-width: 550px"
            >
              <tbody>
                <tr>
                  <td
                    bgcolor="#F9F9F9"
                    align="left"
                    style="
                      padding: 20px 30px 0px 30px;
                      color: #666666;
                      font-family: 'Poppins', sans-serif;
                      margin-bottom: 0%;
                    "
                  >
                    <p
                      style="
                        color: #000000;
                        font-weight: 600;
                        font-style: normal;
                        font-size: 14px;
                        margin: 0%;
                      "
                    >
                      Name
                    </p>
                    <p
                      style="
                        color: #5a5a5a;
                        font-weight: 400;
                        font-style: normal;
                        font-size: 14px;
                        margin-top: 1%;
                      "
                    >
                      ${first_name}
                    </p>
                    <hr
                      style="
                        color: #949495;
                        height: 0.1px;
                        width: 100%;
                        opacity: 22%;
                        margin-top: 1%;
                      "
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    bgcolor="#F9F9F9"
                    align="left"
                    style="
                      padding: 0px 30px 0px 30px;
                      color: #666666;
                      font-family: 'Poppins', sans-serif;
                    "
                  >
                    <p
                      style="
                        color: #000000;
                        font-weight: 600;
                        font-style: normal;
                        font-size: 14px;
                        margin: 0%;
                      "
                    >
                      Email
                    </p>
                    <p
                      style="
                        color: #5a5a5a;
                        font-weight: 400;
                        font-style: normal;
                        font-size: 14px;
                        margin-top: 1%;
                      "
                    >
                    ${email}
                    </p>
                    <hr
                      style="
                        color: #949495;
                        height: 0.1px;
                        width: 100%;
                        opacity: 22%;
                        /* margin-top: 1%; */
                      "
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td bgcolor="#FFFFFF" align="center" style="padding: 0px 10px 0px 10px">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="max-width: 550px"
            >
              <!-- <tr>
                <td
                  bgcolor="#F9F9F9"
                  align="left"
                  style="
                    padding: 20px 30px 0px 30px;
                    color: #666666;
                    font-family: 'Poppins', sans-serif;
                    margin-bottom: 0%;
                  "
                >
                  <p
                    style="
                      color: #000000;
                      font-weight: 600;
                      font-style: normal;
                      font-size: 14px;
                      margin: 0%;
                    "
                  >
                    Name
                  </p>
                  <p
                    style="
                      color: #5a5a5a;
                      font-weight: 400;
                      font-style: normal;
                      font-size: 14px;
                      margin-top: 1%;
                    "
                  >
                    Suhail
                  </p>
                  <hr
                    style="
                      color: #949495;
                      height: 0.1px;
                      width: 100%;
                      opacity: 22%;
                      margin-top: 1%;
                    "
                  />
                </td>
              </tr>
              <tr>
                <td
                  bgcolor="#F9F9F9"
                  align="left"
                  style="
                    padding: 0px 30px 0px 30px;
                    color: #666666;
                    font-family: 'Poppins', sans-serif;
                  "
                >
                  <p
                    style="
                      color: #000000;
                      font-weight: 600;
                      font-style: normal;
                      font-size: 14px;
                      margin: 0%;
                    "
                  >
                    Email
                  </p>
                  <p
                    style="
                      color: #5a5a5a;
                      font-weight: 400;
                      font-style: normal;
                      font-size: 14px;
                      margin-top: 1%;
                    "
                  >
                    ${first_name}
                  </p>
                  <hr
                    style="
                      color: #949495;
                      height: 0.1px;
                      width: 100%;
                      opacity: 22%;
                      margin-top: 1%;
                    "
                  />
                </td>
              </tr> -->
              <tr>
                <td
                  bgcolor="#F9F9F9"
                  align="left"
                  style="
                    padding: 0px 30px 0px 30px;
                    color: #666666;
                    font-family: 'Poppins', sans-serif;
                  "
                >
                  <p
                    style="
                      color: #000000;
                      font-weight: 600;
                      font-style: normal;
                      font-size: 14px;
                      margin: 0%;
                    "
                  >
                    Mobile
                  </p>
                  <p
                    style="
                      color: #5a5a5a;
                      font-weight: 400;
                      font-style: normal;
                      font-size: 14px;
                      margin-top: 1%;
                    "
                  >
                  ${mobile_number}
                  </p>
                  <hr
                    style="
                      color: #949495;
                      height: 0.1px;
                      width: 100%;
                      opacity: 22%;
                      margin-top: 1%;
                    "
                  />
                </td>
              </tr>

              <tr>
                <td
                  bgcolor="#F9F9F9"
                  align="left"
                  style="
                    padding: 0px 30px 0px 30px;
                    color: #666666;
                    font-family: 'Poppins', sans-serif;
                  "
                >
                  <p
                    style="
                      color: #000000;
                      font-weight: 600;
                      font-style: normal;
                      font-size: 14px;
                      margin: 0%;
                    "
                  >
                    Subject
                  </p>
                  <p
                    style="
                      color: #5a5a5a;
                      font-weight: 400;
                      font-style: normal;
                      font-size: 14px;
                      margin-top: 1%;
                    "
                  >
                    ${description}
                  </p>
                  <hr
                    style="
                      color: #949495;
                      height: 0.1px;
                      width: 100%;
                      opacity: 22%;
                      margin-top: 1%;
                    "
                  />
                </td>
              </tr>
              <tr>
                <td
                  bgcolor="#F9F9F9"
                  align="left"
                  style="
                    padding: 0px 30px 60px 30px;
                    color: #666666;
                    font-family: 'Poppins', sans-serif;
                  "
                >
                  <p
                    style="
                      color: #000000;
                      font-weight: 600;
                      font-style: normal;
                      font-size: 14px;
                      margin: 0%;
                    "
                  >
                    Message
                  </p>
                  <p
                    style="
                      color: #5a5a5a;
                      font-weight: 400;
                      font-style: normal;
                      font-size: 14px;
                      margin-top: 1%;
                    "
                  >
                  ${message}
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  bgcolor="#0339D9"
                  align="left"
                  style="
                    padding: 20px 30px 40px 30px;
                    color: #666666;
                    font-family: 'Poppins', sans-serif;
                    /* border-radius: 0px 0px 4px 4px; */
                  "
                ></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
};

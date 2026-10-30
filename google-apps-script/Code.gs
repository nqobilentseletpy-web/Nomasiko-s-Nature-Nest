// Google Apps Script: paste into Extensions > Apps Script in your Google Sheet.
const SHEET_NAME = "Website enquiries";
function doPost(e) {
  const payload = JSON.parse(e.postData.contents || "{}");
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) sheet.appendRow(["Received at","Form type","Name","Email","Phone","Interest","Preferred date","Message"]);
  sheet.appendRow([new Date(), payload.formType || "", payload.name || "", payload.email || "", payload.phone || "", payload.interest || "", payload.date || "", payload.message || ""]);
  // Optional email acknowledgement. Requires the customer to provide an email.
  if (payload.email) {
    MailApp.sendEmail({
      to: payload.email,
      subject: "We received your Captivating Scents enquiry",
      body: "Hello " + (payload.name || "there") + ",\n\nThank you for contacting Captivating Scents. We have received your enquiry and our team will be in touch as soon as possible.\n\nFind your signature.\nCaptivating Scents\n067 974 1002"
    });
  }
  return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
}

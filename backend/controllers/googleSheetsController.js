const { sheets } = require("../config/googleSheets");

const appendToGoogleSheet = async (data) => {
    try {
        // First, verify the sheet exists and get its exact name
        const spreadsheet = await sheets.spreadsheets.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID
        });

        console.log("Available sheets:", spreadsheet.data.sheets.map(sheet => sheet.properties.title));

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            // Use proper sheet name formatting - add single quotes to handle spaces
            range: `'${process.env.GOOGLE_SHEET_NAME}'!A:E`,
            valueInputOption: "USER_ENTERED",
            insertDataOption: "INSERT_ROWS",
            resource: {
                values: [
                    [
                        data.firstName,
                        data.lastName,
                        data.email,
                        data.institution,
                        new Date().toISOString()
                    ],
                ],
            },
        });

        console.log("Data successfully appended to Google Sheets:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error appending data to Google Sheets:", error);
        // Log more specific error information
        if (error.errors) {
            console.error("Detailed errors:", error.errors);
        }
        throw error;
    }
};

module.exports = { appendToGoogleSheet };

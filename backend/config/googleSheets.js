const path = require('path');

const envPath = path.resolve(__dirname, '../.env.local');
require('dotenv').config({ path: envPath });

const { google } = require("googleapis");
const fs = require("fs");


try {
    if (!process.env.GOOGLE_CREDENTIALS_PATH) {
        throw new Error('GOOGLE_CREDENTIALS_PATH is undefined');
    }

    const credentials = JSON.parse(fs.readFileSync(process.env.GOOGLE_CREDENTIALS_PATH));

    // Authorize the client
    const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // Google Sheets setup
    const sheets = google.sheets({ version: "v4", auth });

    module.exports = { sheets };  // Note: you had 'sheet' instead of 'sheets'
} catch (error) {
    console.error('Error:', error);
    console.error('Current working directory:', process.cwd());
    process.exit(1);
}
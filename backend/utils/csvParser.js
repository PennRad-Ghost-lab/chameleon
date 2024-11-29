const csv_parser = require('csv-parser');
const fs = require('fs');

const parseCSV = (filePath, delimiter) =>
    new Promise((resolve, reject) => {
        const rows = [];
        let headers = [];

        fs.createReadStream(filePath)
            .pipe(csv_parser({ separator: delimiter }))
            .on('headers', (csvHeaders) => {
                headers = csvHeaders;
            })
            .on('data', (row) => {
                rows.push(Object.values(row));
            })
            .on('end', () => {
                resolve({ headers, rows });
            })
            .on('error', reject);
    });

module.exports = { parseCSV };

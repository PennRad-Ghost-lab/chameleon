const fs = require('fs');
const path = require('path');
const csv_parser = require('csv-parser');
const fetch = require('node-fetch');

const csvToMongoDB = async (filePath, delimiter, endpoint) => {
    try {
        const fullPath = path.resolve(__dirname, filePath);
        const stats = fs.statSync(fullPath);
        const fileSize = stats.size;

        const rows = [];
        let headers = [];
        let totalRows = 0;

        fs.createReadStream(fullPath)
            .pipe(csv_parser({ separator: delimiter }))
            .on('headers', (csvHeaders) => {
                headers = csvHeaders;
            })
            .on('data', (row) => {
                rows.push(Object.values(row));
                totalRows++;
            })
            .on('end', async () => {
                const dataObject = {
                    headers,
                    data: rows,
                    metadata: {
                        totalRows,
                        fileSize,
                        fileName: path.basename(filePath),
                    },
                };

                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(dataObject),
                });

                console.log(`Response from server: ${await response.text()}`);
            });
    } catch (error) {
        console.error('Error processing CSV:', error);
    }
};

module.exports = csvToMongoDB;

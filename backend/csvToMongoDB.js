const fs = require('fs');
const path = require('path');
const csv_parser = require('csv-parser');

function csvToMongoDB(pth, c) {
  // Get the file size
  filePath = path.join(__dirname, pth);
  const stats = fs.statSync(filePath);
  const fileSize = stats.size;
  console.log(fileSize);

  const rows = [];
  let headers = [];
  let totalRows = 0;

  // Create a read stream for the CSV file
  fs.createReadStream(filePath)
    .pipe(csv_parser({ separator: c}))
    .on('headers', (csvHeaders) => {
      headers = csvHeaders;  // Capture the headers from the CSV
    })
    .on('data', (row) => {
      rows.push(Object.values(row));  // Store each row's values
      totalRows++;  // Increment row count
    })
    .on('end', async () => {
      console.log(rows);

      const obj = {
        headers,
        data: rows.slice(0, -1),
        metadata: {
          totalRows: totalRows - 1,
          fileSize,
          originalName: "test.csv"
        }
      }

      console.log(obj);
      fs.writeFile("test.json", JSON.stringify(obj), function (err) {
        if (err) {
          console.log(err);
        }
      });

    });
}

csvToMongoDB('/test_data/test.csv', ';');
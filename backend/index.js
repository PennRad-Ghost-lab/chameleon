const express = require('express');
const app = express();
const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors());

const { CSVFile, Person } = require('./models/csvFile');


app.use(express.json());
app.use(express.static('dist'));

require('dotenv').config();

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger);

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
});

app.get('/api/data', (request, response) => {
  console.log("express fetching all data");
  CSVFile.find({}).then(data => {
    response.json(data);
  });
});

app.get('/api/data/download-all/', (request, response, next) => {
  console.log('Downloading all data');

  const readmePath = path.join(__dirname, '..', 'frontend', 'public', 'README.md');

  fs.readFile(readmePath, 'utf8', (err, readmeContent) => {
    if (err) {
      console.error('Error reading README:', err);
      // Continue without README if file can't be read
    }

    CSVFile.find()  // Removed empty object parameter
      .lean()       // Added lean() for better performance
      .exec()       // Added exec() to ensure proper promise handling
      .then(csvFiles => {
        if (csvFiles && csvFiles.length > 0) {  // Better check for results
          const zip = new JSZip();

          if (readmeContent) {
            zip.file('README.md', readmeContent);
          }

          csvFiles.forEach(csv => {
            const csvData = csv.headers.join(',') + '\n' + csv.data.map(row => row.join(',')).join('\n');
            zip.file(csv.metadata.fileName, csvData);
          });
          zip.generateAsync({ type: 'nodebuffer' }).then(content => {
            response.setHeader('Content-Disposition', 'attachment; filename=all-data.zip');
            response.setHeader('Content-Type', 'application/zip');
            response.setHeader('Content-Length', content.length);
            response.send(content);
          });
        } else {
          response.status(404).json({ error: 'No files found' });
        }
      })
      .catch(error => {
        console.error('Download failed:', error);
        next(error);
      });
  });
});

app.get('/api/data/:id', (request, response, next) => {
  console.log('ID:', request.params.id);
  CSVFile.findById(request.params.id)
    .then(data => {
      if (data) {
        response.json(data);
      } else {
        response.status(404).end();
      }
    })
    .catch(error => next(error));
});

app.get('/api/data/:id/download', (request, response, next) => {
  console.log('ID:', request.params.id);
  CSVFile.findById(request.params.id)
    .then(csv => {
      if (csv) {
        response.setHeader('Content-Disposition', `attachment; filename=${csv.metadata.fileName}`);
        response.setHeader('Content-Type', csv.metadata.mimeType);
        response.setHeader('Content-Length', csv.metadata.fileSize);
        //add the headers and the data
        const csvData = csv.headers.join(',') + '\n' + csv.data.map(row => row.join(',')).join('\n');
        response.send(csvData);
      } else {
        response.status(404).end();
      }
    })
    .catch(error => {
      console.error('Download failed:', error);
      next(error);
    });
});

app.post('/api/data', (request, response, next) => {
  const body = request.body;

  const csvFile = new CSVFile({
    metadata: body.metadata,
    headers: body.headers,
    data: body.data
  });

  csvFile.save().then(savedCSV => {
    response.json(savedCSV);
  }).catch(error => next(error));
});

app.get('/api/persons', (request, response) => {
  Person.find({}).then(data => {
    response.json(data);
  });
});

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(data => {
      if (data) {
        response.json(data);
      } else {
        response.status(404).end();
      }
    })
    .catch(error => next(error));
});

app.post('/api/persons', (request, response, next) => {
  const body = request.body;

  const person = new Person({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    institution: body.institution
  });

  console.log(person);

  person.save().then(savedPerson => {
    response.json(savedPerson);
  }).catch(error => next(error));
});

const errorHandler = (error, req, res, next) => {
  console.error(error.message);

  if (error.name === 'CastError') {
    return res.status(400).json({ error: 'Malformatted ID' });
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message });
  }

  next(error);
};

app.use(errorHandler);


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
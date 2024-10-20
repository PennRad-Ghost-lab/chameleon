const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

require('dotenv').config();

const url = process.env.MONGODB_URI;

mongoose.connect(url)
    .then(() => {
        console.log('connected to MongoDB');
    })
    .catch(error => {
        console.log('error connecting to MongoDB:', error.message);
        console.log("URL: ", url);
    });

// Main schema for the CSV file
const csvFileSchema = new mongoose.Schema({
    metadata: {
        totalRows: Number,
        fileSize: Number,
        fileName: String,
        mimeType: {
            type: String,
            default: 'text/csv'
        }
    },
    headers: [String],
    data: [[String]]
}, { collection: 'csvfiles' });

csvFileSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model('CSVFile', csvFileSchema);
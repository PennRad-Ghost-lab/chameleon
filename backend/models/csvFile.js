const mongoose = require('mongoose');

const csvFileSchema = new mongoose.Schema({
    metadata: {
        totalRows: Number,
        fileSize: Number,
        fileName: String,
        mimeType: {
            type: String,
            default: 'text/csv',
        },
    },
    headers: [String],
    data: [[String]],
}, { collection: 'csvfiles' });

csvFileSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

module.exports = mongoose.model('CSVFile', csvFileSchema);

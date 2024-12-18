const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    institution: String,
}, { collection: 'people' });

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

module.exports = mongoose.model('Person', personSchema);

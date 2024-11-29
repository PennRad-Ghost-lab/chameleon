const { Person } = require("../models/person");

const getAllPersons = async (req, res, next) => {
    try {
        const persons = await Person.find({});
        res.json(persons);
    } catch (error) {
        next(error);
    }
};

const addPerson = async (req, res, next) => {
    const { firstName, lastName, email, institution } = req.body;

    try {
        const person = new Person({ firstName, lastName, email, institution });
        const savedPerson = await person.save();
        res.json(savedPerson);
    } catch (error) {
        next(error);
    }
};

module.exports = { getAllPersons, addPerson };

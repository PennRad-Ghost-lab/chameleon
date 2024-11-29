const express = require("express");
const { getAllPersons, addPerson } = require("../controllers/personController");
const router = express.Router();

router.get("/", getAllPersons);
router.post("/", addPerson);

module.exports = router;

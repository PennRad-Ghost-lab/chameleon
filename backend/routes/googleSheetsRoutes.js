const express = require("express");
const { appendToGoogleSheet } = require("../controllers/googleSheetsController");
const router = express.Router();

router.post("/", async (req, res, next) => {
    try {
        const { firstName, lastName, email, institution } = req.body;
        await appendToGoogleSheet({ firstName, lastName, email, institution });
        res.json({ message: "Data added to Google Sheets." });
    } catch (error) {
        next(error);
    }
});

module.exports = router;

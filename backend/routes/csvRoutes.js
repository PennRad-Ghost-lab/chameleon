const express = require("express");
const { getAllData, downloadAllData } = require("../controllers/csvController");
const router = express.Router();

router.get("/", getAllData);
router.get("/download-all", downloadAllData);

module.exports = router;

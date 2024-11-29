const { CSVFile } = require("../models/csvFile");
const JSZip = require("jszip");
const fs = require("fs");
const path = require("path");

const getAllData = async (req, res, next) => {
    try {
        const data = await CSVFile.find({});
        res.json(data);
    } catch (error) {
        next(error);
    }
};

const downloadAllData = async (req, res, next) => {
    try {
        const readmePath = path.join(__dirname, "..", "frontend", "public", "README.md");
        const readmeContent = fs.existsSync(readmePath) ? fs.readFileSync(readmePath, "utf8") : null;

        const csvFiles = await CSVFile.find().lean().exec();
        if (!csvFiles.length) return res.status(404).json({ error: "No files found" });

        const zip = new JSZip();
        if (readmeContent) zip.file("README.md", readmeContent);

        csvFiles.forEach(csv => {
            const csvData = csv.headers.join(",") + "\n" + csv.data.map(row => row.join(",")).join("\n");
            zip.file(csv.metadata.fileName, csvData);
        });

        const content = await zip.generateAsync({ type: "nodebuffer" });
        res.setHeader("Content-Disposition", "attachment; filename=all-data.zip");
        res.setHeader("Content-Type", "application/zip");
        res.send(content);
    } catch (error) {
        console.error("Download failed:", error);
        next(error);
    }
};

module.exports = { getAllData, downloadAllData };

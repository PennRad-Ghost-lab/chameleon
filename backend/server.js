const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./config/database');
const csvRoutes = require('./routes/csvRoutes');
const personRoutes = require('./routes/personRoutes');
const googleSheetsRoutes = require('./routes/googleSheetsRoutes');

const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

// Connect to database
connectToDatabase();

// Routes
app.use('/api/data', csvRoutes);
app.use('/api/persons', personRoutes);
app.use('/api/google-sheets', googleSheetsRoutes);

// Error handler
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ error: 'Internal server error' });
});

// Unknown endpoint
app.use((req, res) => res.status(404).json({ error: 'Unknown endpoint' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

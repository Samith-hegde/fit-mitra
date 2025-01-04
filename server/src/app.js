const path = require('path');
const express = require('express');
const prisma = require('./config/prismaClient');
require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: true }));

const PORT = process.env.BACKEND_PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
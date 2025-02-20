const path = require('path');
const express = require('express');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const homeRouter = require('./routes/homeRouter');

app.use('/api', homeRouter);

const PORT = process.env.BACKEND_PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const express = require('express');
const router = express.Router();

/*
const { getDashboard } = require('../controllers/dashboardController');

router.get('/', getDashboard);
*/

router.get('/', (req, res) => {
    res.send('Dashboard');
});

module.exports = router;
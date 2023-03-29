const express = require('express');
const router = express.Router();
const db = require('../models/database');

router.get('/init', (req, res) => {
    db.initDB();
    res.render('index', { title: 'Setup', message: 'The database has been initialized.' });
});

module.exports = router;
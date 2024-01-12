const express = require('express');
const router = express.Router();

const url = '/src/chat';

router.post(url + '/start', (req, res) => {
    const requestBody = req.body;
    console.log('Received POST request with data:', requestBody);
    res.json({ message: 'POST request received successfully' });
});

module.exports = router;

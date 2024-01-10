// postHandler.js
const express = require('express');
const router = express.Router();

const url = '/src/chat';

router.post(url + '/start', (req, res) => {
    const requestBody = req.body;
    // 在这里处理POST请求，可以进行数据库操作、业务逻辑等
    console.log('Received POST request with data:', requestBody);
    res.json({ message: 'POST request received successfully' });
});

module.exports = router;

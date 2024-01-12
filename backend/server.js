const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 80;

const chat = require('./src/chat/chat');
const createUser = require('./src/createUser/createUser');

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json()); // 中间件，用于解析JSON请求体

app.use(chat);
app.use(createUser);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

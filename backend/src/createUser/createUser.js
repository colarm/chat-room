const express = require('express');
const router = express.Router();

const url = '/src/createUser';

router.post(url + 'new', (req, res) => {
  const requestBody = req.body;
  console.log(requestBody);
  res.json({ 'user': 'haha' });
});

module.exports = router;
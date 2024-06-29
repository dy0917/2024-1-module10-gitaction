const express = require('express');
require('dotenv').config();
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send(
    `Hello Kingsley! build with git action ${process.env.HELLO_WORLD} ${prcess.env.API_KEY}`
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

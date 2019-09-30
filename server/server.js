const express = require('express');
const path = require('path');
const port = 3000;
const addNumbers = require('./addNumbers');
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.post('/', (req, res) => {
  const input = req.body.input;

  res.send(addNumbers(input));
});

app.listen(port, () => console.log('Server running on port ', port));

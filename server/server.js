const express = require('express');
const path = require('path');
const port = 3000;
const logic = require('./logic');
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.post('/', (req, res) => {
  const input = req.body.input;
  
  // send results back as a string
  res.send(logic(input).toString());
});

app.listen(port, () => console.log('Server running on port ', port));

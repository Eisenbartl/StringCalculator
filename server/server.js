const express = require('express');
const path = require('path');
const port = 3000;
const logic = require('./logic');
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.post('/', (req, res) => {
  console.log('hello')
});

app.listen(port, () => console.log('Server running on port ', port));
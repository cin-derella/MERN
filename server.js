const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database

console.log('begin connectDB');
connectDB();

console.log('after connectDB');

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Explaination for post/get
app.post('/test.html', (req, res) =>
  res.send(
    '<html>' +
      '<head><title>cin.derel.la</title></head>' +
      '<h1>Welcome from post</h1>' +
      '</html>'
  )
);
var j = '';
app.get('/welcome.html', (req, res) => {
  for (i = 0; i < 10; i++) {
    j += `${i}`;
    console.log(i);
  }
  res.send(`${j}`);
});

//

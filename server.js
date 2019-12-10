const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();

// Connect Database

console.log('begin connectDB');

connectDB();

console.log('after connectDB');

// Init Middleware
app.use(express.json({ extended: false }));

//app.get('/', (req, res) => res.send('API Running'));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

/* Explaination for post/get
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

*/

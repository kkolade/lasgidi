const express = require('express');

const app = express();

const port = process.env.PORT || 3200;

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Lasgidi');
});

app.get('/about', (req, res) => {
  res.type('text/plain');
  res.send('About Lasgidi');
});

// 404 page
app.use((req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Page not found');
});

// 505 page
app.use((err, req, res, next) => {
  console.log(err);
  res.type('text/plain');
  res.status(505);
  res.send('505 - Server error');
});

app.listen(port, () =>
  console.log(
    `Express started on http://localhost:${port}; ` +
      `press Ctrl-C to terminate.`
  )
);

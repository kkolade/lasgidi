import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';

import 'dotenv/config';
import ejs from 'ejs';

const port = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

// Home page
app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Welcome to Lasgidi');
});

app.get('/about', (req, res) => {
  res.type('text/plain');
  res.send('About Lasgidi');
});

// 404 - Page not found
app.use((req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Page not found!');
});

// 500 - Server Error
app.use((err, req, res, next) => {
  console.error(err.message);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Internal Server Error!');
});

app.listen(port, () => {
  console.log(
    `Server started and listening on http://localhost/${port} ` +
      'Press ctrl+C to terminate'
  );
});

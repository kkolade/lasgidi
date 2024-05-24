// Node core modules
// import path from 'path';
// import { fileURLToPath } from 'url';

// Express
import express from 'express';

// Dependencies modules
import 'dotenv/config';
// import ejs from 'ejs';
import expressLayouts from 'express-ejs-layouts';

// import from lib
import { getFortune } from './lib/fortune.js';

// Variables
const port = process.env.PORT;
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();

// Static Files
app.use(express.static('public'));

// Setup view engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('views', 'views');
// app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');

// Home page
app.get('/', (req, res) => {
  res.render('pages/index', {
    title: 'Homepage',
  });
});

app.get('/about', (req, res) => {
  res.render('pages/about', {
    title: 'About Page',
    layout: './layouts/sidebar',
    fortune: getFortune(),
  });
});

// 404 - Page not found
app.use((req, res) => {
  res.status(404);
  res.render('pages/404', {
    title: 'Page Not Found',
  });
});

// 500 - Server Error
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500);
  res.render('pages.500'),
    {
      title: 'Server Error',
    };
});

app.listen(port, () => {
  console.log(
    `Server started and listening on http://localhost/${port} ` +
      'Press ctrl+C to terminate'
  );
});

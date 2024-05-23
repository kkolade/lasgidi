// Node core modules
import path from 'path';
import { fileURLToPath } from 'url';

// Express
import express from 'express';

// Dependencies modules
import 'dotenv/config';
import ejs from 'ejs';
import expressLayouts from 'express-ejs-layouts';

// Variables
const port = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Static Files
app.use(express.static('public'));

// Setup view engine
app.use(expressLayouts);
app.set('layout', path.join('./layouts/main'));
app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');

const user = {
  firstName: 'Leke',
  lastName: 'Kolade',
};
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
  });
});

// 404 - Page not found
app.use((req, res) => {
  res.status(404);
  res.render('pages/404');
});

// 500 - Server Error
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500);
  res.render('pages.500');
});

app.listen(port, () => {
  console.log(
    `Server started and listening on http://localhost/${port} ` +
      'Press ctrl+C to terminate'
  );
});

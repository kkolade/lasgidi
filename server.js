import fs from 'fs';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

import 'dotenv/config';

const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serveStaticFile = (res, path, contentType, responseCode = 200) => {
  fs.readFile(__dirname + path, (error, data) => {
    if (error) {
      res.writeHead(500, {
        'Content-type': 'text/plain',
      });
      res.end('500 - Internal Server Error');
    }
    res.writeHead(responseCode, {
      'Content-type': contentType,
    });
    res.end(data);
  });
};

const app = http.createServer((req, res) => {
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch (path) {
    case '':
      serveStaticFile(res, '/public/index.html', 'text/html');
      break;
    case '/about':
      serveStaticFile(res, '/public/about.html', 'text/html');
      break;
    default:
      serveStaticFile(res, '/public/404.html', 'text/html', 404);
      break;
  }
});

app.listen(port, () => {
  console.log(`Server started and running on port:${port}`);
});

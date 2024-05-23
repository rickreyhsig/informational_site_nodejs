const express = require("express");
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;

// Path to the directory containing your static files
const publicDirectoryPath = path.join(__dirname, './');

function rootHandler(req, res) {
  res.sendFile(path.join(publicDirectoryPath, 'index.html'));
}

function aboutHandler(req, res) {
  res.sendFile(path.join(publicDirectoryPath, 'about.html'));
}

function contactHandler(req, res) {
  res.sendFile(path.join(publicDirectoryPath, 'contact-me.html'));
}

// Define routes
app.get(['/', '/index.html'], rootHandler);
app.get(['/about', '/about.html'], aboutHandler);
app.get(['/contact-me', '/contact-me.html'], contactHandler);

app.listen(PORT, () => {
  console.log(`Express server is listening on port ${PORT}!`);
});


/*
const http = require('node:http');
const fs = require('fs');

// Create a local server to receive data from & adds routing logic
const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.url === '/about' || req.url === '/about.html') {
    fs.readFile('about.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }
  else if (req.url === '/contact-me' || req.url === '/contact-me.html') {
    fs.readFile('contact-me.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }
  else {
    // Handle error routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page Not Found');
  }
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
*/

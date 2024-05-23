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

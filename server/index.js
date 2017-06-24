const express = require('express');
const path = require('path');

const app = express();

// Server static assets
app.use(express.static(path.resolve(__dirname, '..', 'dist')));

// Always return the main index.html, so that your custom router (e.g. react-router) can render the content
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

module.exports = app;

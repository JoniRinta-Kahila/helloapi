const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Endpoint "/"
app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1>');
});

// Endpoint "/hello"
app.get('/hello', (req, res) => {
    res.send('hello');
});

// Käynnistä palvelin
app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});
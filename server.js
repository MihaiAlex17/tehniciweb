const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname)));

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/index1.html', (req, res) => {
    console.log(path.join(__dirname, '/index1.html'))
    res.sendFile(path.join(__dirname, '/index1.html'));
});

app.get('/index2.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/index2.html'));
});

app.use((req, res) => {
    res.status(404).send('<h1>404 Page Not Found</h1>');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

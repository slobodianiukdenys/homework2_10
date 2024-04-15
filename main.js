const express = require('express');
const app = express();
const port = 2903;

app.get('/', (req, res) => {
    res.send('GET request');
});

app.post('/', (req, res) => {
    res.send('POST request');
});

app.delete('/', (req, res) => {
    res.send('DELETE request');
});

app.patch('/', (req, res) => {
    res.send('PATCH request');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
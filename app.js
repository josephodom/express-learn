import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send(`Hello, World! Lol`);
});

app.listen(3000);

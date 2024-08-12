import express from 'express';

const app1 = express();
const port1 = 3000;

app1.get('/', (req, res) => {
    res.send('Hello World from Server 1 \n');
});

app1.listen(port1, () => {
    console.log(`Server 1 running at http://localhost:${port1}/`);
});


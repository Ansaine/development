import express from 'express';

const app2 = express();
const port2 = 4000;

app2.get('/', (req, res) => {
    res.send('Hello World from Server 2 \n');
});

app2.listen(port2, () => {
    console.log(`Server 2 running at http://localhost:${port2}/`);
});

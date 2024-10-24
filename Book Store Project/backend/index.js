import express from 'express';
import {PORT} from './config.js';

const app = express();

app.get('/', (req, res) => {
    console.log(res);
    return res.status(200).send('welcome to MERN stack tutorial');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
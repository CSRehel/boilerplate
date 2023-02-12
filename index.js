const express = require('express');
const cors = require('cors');
const app = express();

const { config } = require('./config/config');

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Este es el home');
});

app.get('*', (req, res) => {
    res.sendStatus(404);
});

app.listen(config.port, console.log(`SERVER ON PORT ${config.port}`));
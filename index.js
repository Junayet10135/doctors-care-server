const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello From Doctors Care')
})

app.listen(port, () => {
    console.log(`Doctors Care app listening on port ${port}`)
})
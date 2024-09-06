const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config()
const port = process.env.PORT || 9000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("<h1>Hi This is Wajahat</h1><br><h2>Server is Running!</h2>");
});

app.post('/calculate', (req, res) => {
    const numbers = req.body.numbers;

    if (!Array.isArray(numbers)) {
        return res.status(400).send('Input should be an array of int32 numbers');
    }

    const result = numbers.reduce((acc, num) => acc + num, 0);

    res.json({ result });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const dotenv = require("dotenv");
dotenv.config()
const port = process.env.PORT || 9000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("<h1>Hi This is Wajahat</h1><br><h2>Server is Running!</h2>");
});

app.post("/sum", (req,res) => {
    const numbers = req.body;

    if(!Array.isArray(numbers)) {
        return res.status(400).json({error: "input must be an array"})
    }

    try {
        const sum = numbers.reduce((acc, curr) => {
            if (!Number.isInteger(curr) || curr < -2147483648 || curr > 2147483647) {
                throw new Error("All elements must be 32-bit integers");
            }
            return acc + curr;
        }, 0);

        res.json({ result: sum });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
const express = require('express')
const app = express();
const port = 8e3;

app.get('/api', (req, res) => {
    return res.json({
        result: "AYyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"
    });
})

app.listen(port)
const express = require('express');

const app = express();
const PORT = 5000;

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from thsdfafde server!' });
});

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT);
    else 
        console.log("Error occurred, server can't start", error);
});

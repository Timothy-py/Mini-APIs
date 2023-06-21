const express = require('express');
const db = require('./db')
const routes = require('./routes/routes')

// initialize express app
const app = express();

const PORT = process.env.PORT || 3000;

db;

// parse req
app.use(express.json());

// set route
app.use('/api/1', routes);

app.get('/', (req, res) => {
    res.send('Hello World!')
});


app.listen(PORT, () => {
    console.log(`API Project 1 is listening on PORT ${PORT}`)
});

module.exports = app;
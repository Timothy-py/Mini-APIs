const express = require('express');
const routes = require('./routes/routes')

// initialize express app
const app = express();

const PORT = process.env.PORT || 3000;

// set route
app.use('/api/1', routes);

// middlewares
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
});


app.listen(PORT, () => {
    console.log(`API Project 1 is listening on PORT ${PORT}`)
});

module.exports = app;
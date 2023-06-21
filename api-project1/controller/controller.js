const db = require('../db');

// index
exports.index = (req, res) => {
    return res.status(200).send('Hello API Project 1')
}

// create a product
exports.createProduct = (req, res) => {
    const {name, price, description} = req.body;

    db.run('INSERT INTO products (name, price, description) VALUES (?, ?, ?)',[name, price, description], (err) => {
        if(err){
            console.error(err)
            return res.status(500).json({
                status: 'error',
                message: "Internal server error",
            });
        };

        res.status(201).json({
            status: 'success',
            // data: 
        })
    })
}
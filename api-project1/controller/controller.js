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

// get all products
exports.getProducts = (req, res) => {
    const LIMIT = parseInt(req.query.LIMIT, 10) || 2
    // const OFFSET = parseInt(req.query.PAGE, 10) || 1

    db.all('SELECT id, name, price, description FROM products ORDER BY id LIMIT (?)',[LIMIT], (err, rows)=>{
        if(err){
            console.error(err)
            return res.status(500).json({
                status: 'error',
                message: "Internal server error",
            });
        }

        return res.status(200).json({
            status: 'success',
            data: rows,
            total: rows.length
        })
    })
}
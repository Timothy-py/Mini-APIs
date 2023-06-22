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

// get a product detail
exports.getAproduct = (req, res) => {
    const {id} = req.params;

    db.get('SELECT id, name, price, description FROM products WHERE id=(?)', [id], (err, row)=>{
        if(err){
            console.error(err);
            return res.status(500).json({
                staus: 'error',
                message: 'Internal server error'
            })
        }
        
        if(!row){
            return res.status(404).json({
                status: 'failed',
                message: 'Product not found.'
            })
        }

        return res.status(200).json({
            status: 'success',
            data: row
        })
    })
}

// update a product
exports.updateProduct = (req, res) => {
    const {id} = req.params;
    const {name, description, price} = req.body;

    db.run('UPDATE products SET name=(?), price=(?), description=(?) WHERE id=(?)', [name,price,description,id], (err)=>{
        if(err){
            console.error(err);
            return res.status(500).json({
                staus: 'error',
                message: 'Internal server error'
            })
        }

        return res.sendStatus(204);
    })
};

// delete a product
exports.deleteAproduct = (req, res) => {
    const {id} = req.params;

    db.run('DELETE FROM products WHERE id=(?)', [id], (err)=>{
        if(err) return res.status(500).json({
            status: "error",
            message: "Internal server error"
        })

        return res.sendStatus(204);
    })
}

// add a product to cart
exports.addProductToCart = (req, res) => {
    const {id} = req.params;

    db.run('INSERT INTO cart (product_id) VALUES (?)', [id], (err)=>{
        if(err) return res.status(500).json({
            status: "error",
            message: "Internal server error"
        })

        res.status(201).json({
            status: "success",
            message: "Product added to cart"
        })
    })
}
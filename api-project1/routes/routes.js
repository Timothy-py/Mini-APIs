const router = require('express').Router();

const {
    index, createProduct,
    getProducts
} = require('../controller/controller');

router.get('/', index);

router.post('/product', createProduct)

router.get('/product', getProducts)

module.exports = router;
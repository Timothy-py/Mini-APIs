const router = require('express').Router();

const {index, createProduct} = require('../controller/controller');

router.get('/', index);

router.post('/product', createProduct)

module.exports = router;
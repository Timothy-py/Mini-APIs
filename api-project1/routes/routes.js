const router = require('express').Router();

const {
    index, createProduct,
    getProducts,
    getAproduct,
    updateProduct,
    deleteAproduct,
    addProductToCart
} = require('../controller/controller');

router.get('/', index);

router.post('/products', createProduct);

router.get('/products', getProducts);

router.get('/products/:id', getAproduct);

router.put('/products/:id', updateProduct);

router.delete('/products/:id', deleteAproduct);

router.post('/cart/:id', addProductToCart);
module.exports = router;
const router = require('express').Router();

const {
    index, createProduct,
    getProducts,
    getAproduct,
    updateProduct,
    deleteAproduct,
    addProductToCart,
    getCart,
    removeProductFromCart,
} = require('../controller/controller');

router.get('/', index);

// ***************PRODUCT API*********************
router.post('/products', createProduct);

router.get('/products', getProducts);

router.get('/products/:id', getAproduct);

router.put('/products/:id', updateProduct);

router.delete('/products/:id', deleteAproduct);

// *******************CART API********************

router.post('/cart/:id', addProductToCart);

router.get('/cart', getCart);

router.delete('/cart/:id', removeProductFromCart);


module.exports = router;
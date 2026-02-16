const express = require('express');
const router=express.Router()
app.use(express.json()); // To parse JSON request bodies

let products = []; 

// GET all products
router.get('/products', (req, res) => {
    res.json(products);
});

// GET product by ID
router.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
});

// POST create product
router.post('/products', (req, res) => {
    const newProduct = { id: Date.now(), ...req.body };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// PUT update product
router.put('/products/:id', (req, res) => {
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Product not found');
    products[index] = { ...products[index], ...req.body };
    res.json(products[index]);
});

// DELETE product
router.delete('/products/:id', (req, res) => {
    products = products.filter(p => p.id !== parseInt(req.params.id));
    res.send('Product deleted');
});

module.exports=router

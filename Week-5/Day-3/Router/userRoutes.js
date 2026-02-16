const express = require('express');
const router=express.Router()
app.use(express.json()); // To parse JSON request bodies

let users = []; 
router.get('/users', (req, res) => {
    res.json(users);
});

// GET single user by ID
router.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    res.json(user);
});

// POST create user
router.post('/users', (req, res) => {
    const newUser = { id: Date.now(), ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT update user
router.put('/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('User not found');
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
});

// DELETE user
router.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.send('User deleted');
});

module.exports=router
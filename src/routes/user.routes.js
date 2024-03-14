const express = require('express');
const userSchema = require('../models/user.model');

const router = express.Router();

// GetAll Users
router.get('/users', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

// Get User By Id
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

// Create User
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

// Update User
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, lastname, age, email } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { name, lastname, age, email } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

// Delete User
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

module.exports = router;
const express = require('express');
const { route } = require('./warehouses_routes');
const router = express.Router();

// Get inventory objects

router.get('/warehouses', (req, res) => {
    res.send('warehouse object');
})

// Create inventory objects 

router.post('/warehouses', (req, res) => {
    res.json('warehouse object');
})

// Edit inventory objects

router.edit('/warehouses', (req, res) => {
    res.json('warehouses object');
})

// Delete inventory objects

router.delete('/warehouses', (req, res) => {
    res.json('warehouses object');

})

module.exports = router
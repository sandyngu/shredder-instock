const express = require('express');
const router = express.Router();
const router = express.Router();


// Get inventory objects

router.get('/warehouses', (req, res) => {
    res.send('warehouse object');
})

// Create inventory objects 

router.post('/warehouses', (req, res) => {
    res.send('warehouse object');
})

// Edit inventory objects

router.edit('/warehouses', (req, res) => {
    res.send('warehouses object');
})

// Delete inventory objects

router.delete('/warehouses', (req, res) => {
    res.send('warehouses object');

})

module.exports = router
const express = require('express');
const { route } = require('./warehouses');
const router = express.Router();


// Get inventory objects

router.get('/inventories', (req, res) => {
    res.send('inventory object');
})

// Create inventory objects 

router.post('/inventories', (req, res) => {
    res.send('inventory object');

})

// Edit inventory objects

router.edit('/inventories', (req, res) => {
    res.send('inventory object');

})

// Delete inventory objects

router.delete('/inventories', (req, res) => {
    res.send('inventory object');

})


module.exports = router
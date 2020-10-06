const express = require('express');
const { route } = require('./inventories_routes');
const router = express.Router();

// Get inventory objects

router.get('/inventories', (req, res) => {
    res.send('inventory object');
})

// Create inventory objects 

router.post('/inventories', (req, res) => {
    res.json('inventory object');

})

// Edit inventory objects

router.edit('/inventories', (req, res) => {
    res.json('inventory object');

})

// Delete inventory objects

router.delete('/inventories', (req, res) => {
    res.json('inventory object');

})

module.exports = router
const express = require('express');
const { route } = require('./inventories_routes');
const router = express.Router();
const inventories = require("../inventories.json");
const bodyParser = require("body-parser");
const cors = require('cors');

router.use(cors());
router.use(bodyParser.json());

// Get inventory objects

router.get('/', (req, res) => {
    res.send(inventories);
})

// Get single inventory object by id

router.get('/:id', (req, res) => {
    res.send('inventory object');
})

// Create inventory objects 

router.post('/', (req, res) => {
    res.json('inventory object');
})

// Edit inventory objects

 router.put('/', (req, res) => {
     res.json('inventory object');
 })

// Delete inventory objects

router.delete('/', (req, res) => {
    res.json('inventory object');
})

module.exports = router
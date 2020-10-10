const express = require('express');
const { route } = require('./warehouses_routes');
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require('cors');
const fs = require('fs');

router.use(cors());
router.use(bodyParser.json());

// Get warehouse objects

router.get('/', (_req, res) => {
    const warehouses = JSON.parse(fs.readFileSync("./warehouses.json"));
    res.send(warehouses);
})

// Get single warehouse object by id

router.get('/:id', (_req, res) => {
    res.send(warehouses);
})

// Create warehouse object 

router.post('/', (req, res) => {
    res.json('warehouse object');
})

// Edit warehouse objects

router.put('/', (req, res) => {
    res.json('warehouses object');
})

// Delete inventory objects

router.delete('/', (req, res) => {
    const { deletedWarehouse } = req.body

    let index = warehouses.findIndex((warehouse) => warehouse == deletedWarehouse);
        
        let newWarehousesList = warehouses;
        const updatedWarehouses = newWarehousesList.splice(index, 1)

    res.json(updatedWarehouses);
})

module.exports = router
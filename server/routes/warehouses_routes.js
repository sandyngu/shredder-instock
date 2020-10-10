const express = require('express');
const { route } = require('./warehouses_routes');
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require('cors');
const fs = require('fs');
const warehouses = JSON.parse(fs.readFileSync("./warehouses.json"));

router.use(cors());
router.use(bodyParser.json());

// Get warehouse objects

router.get('/', (_req, res) => {
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
        
    const updatedWarehouses = warehouses.splice(index, 1)

    fs.writeFileSync('./warehouses.json', JSON.stringify(warehouses));
    res.status(201).send({status:'warehouse deleted'});

    res.json(warehouses);
})

module.exports = router
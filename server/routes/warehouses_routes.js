const express = require('express');
const { route } = require('./warehouses_routes');
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require('cors');
const fs = require('fs');
const warehouses = JSON.parse(fs.readFileSync("./warehouses.json"));
<<<<<<< HEAD

=======
>>>>>>> development
router.use(cors());
router.use(bodyParser.json());
router.use(express.json());

// Get warehouse objects

router.get('/', (_req, res) => {
    res.send(warehouses);
})

// Get single warehouse object by id

router.get('/:id', (req, res) => {
    console.log(req.params.id)
    // const warehouseDetails = warehouses.find(warehouse => warehouse.id === req.params.id)
    // res.json(warehouseDetails)
    res.send('hello')
})

// Create warehouse object 

router.post('/', (req, res) => {
    console.log(req.body);
    const addWarehouseData = JSON.parse(fs.readFileSync('./warehouses.json'));
    addWarehouseData.push(req.body);
    console.log(addWarehouseData);
    fs.writeFileSync('./warehouses.json', JSON.stringify(addWarehouseData), null, 2);
    res.status(201).send({status: 'warehouse added'});
})
    // res.json('warehouse object');

// Edit warehouse objects

router.put('/', (req, res) => {
    res.json('warehouses object');
})

// Delete inventory objects

router.delete('/', (req, res) => {
    const { deletedWarehouse } = req.body

    let index = warehouses.findIndex((warehouse) => warehouse == deletedWarehouse);
        
    warehouses.splice(index, 1)

    fs.writeFileSync('./warehouses.json', JSON.stringify(warehouses));
    res.status(201).send({status:'warehouse deleted'});

    res.json(warehouses);
})

module.exports = router
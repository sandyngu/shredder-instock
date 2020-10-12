const express = require('express');
const { route } = require('./warehouses_routes');
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require('cors');
const fs = require('fs');
const warehouses = JSON.parse(fs.readFileSync("./warehouses.json"));

router.use(cors());
router.use(bodyParser.json());
router.use(express.json());

// Get warehouse objects

router.get('/', (_req, res) => {
    res.send(warehouses);
})

// Get single warehouse object by id

router.get('/:id', (_req, res) => {
    console.log(req.params.id)
    const singleWarehouse = warehouses.find(warehouse => warehouse.id === req.params.id)
    const { id, name, address, city, country } = singleWarehouse
    res.json({
        id: id,
        name: name,
        address: address,
        city: city,
        country: country,
        contact: {
            name: singleWarehouse.contact.name,
            position: singleWarehouse.contact.position,
            phone: singleWarehouse.contact.phone,
            email: singleWarehouse.contact.email
        }
    })
})

// Create warehouse object 

router.post('/', (req, res) => {
    // console.log(req.body);
    // const addWarehouseData = JSON.parse(fs.readFileSync('./warehouses.json'));
    // addWarehouseData.push(req.body);
    // console.log(addWarehouseData);
    // fs.writeFileSync('./warehouses.json', JSON.stringify(addWarehouseData), null, 2);
    // res.status(201).send({status: 'warehouse added'});
})
    // res.json('warehouse object');

// Edit warehouse objects

router.put('/', (req, res) => {
    res.json('warehouses object');
})

// Delete warehouses objects

router.delete('/', (req, res) => {
    const { deletedWarehouse } = req.body
    console.log(req.body)

    let index = warehouses.findIndex((warehouse) => warehouse === deletedWarehouse);
        
    warehouses = warehouses.splice(index, 1)

    fs.writeFileSync('./warehouses.json', JSON.stringify(warehouses));

    // res.send(deletedWarehouse);
})

module.exports = router
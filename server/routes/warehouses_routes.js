const express = require('express');
const { route } = require('./warehouses_routes');
const router = express.Router();
const warehouses = require("../warehouses.json");
const bodyParser = require("body-parser");
const cors = require('cors');
const fs = require('fs');


router.use(cors());
router.use(bodyParser.json());
router.use(express.json());

// Get warehouse objects

router.get('/', (_req, res) => {
    res.send(warehouses);
})

// Get single warehouse object by id

router.get('/:id', (_req, res) => {
    res.send(warehouses);
})

// Create warehouse object 

router.post('/', (req, _res) => {
    const addNewWarehouse = {
        id: req.body.id,
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        // contact: {
        //     name: req.body.contact.name,
        //     position: req.body.contact.name,
        //     phone: req.body.contact.phone,
        //     email: req.body.contact.email
        // }
    }
    const readData = fs.readFileSync("../warehouses.json");
    const parseData = JSON.parse(readData);
    parseData['../warehouses.json'].push(req.body);
    const stringData = JSON.stringify(parseData);
    fs.writeFileSync('../warehouses.json', stringData, (err) => {
        if (err) throw err;
});
    // res.json('warehouse object');
})

// Edit warehouse objects

router.put('/', (req, res) => {
    res.json('warehouses object');
})

// Delete inventory objects

router.delete('/', (req, res) => {
    const { deletedWarehouse } = req.body
    console.log(req.body)

    let index = warehouses.findIndex((warehouse) => warehouse == deletedWarehouse);
        console.log(index)
        
        let newWarehousesList = warehouses;
        const updatedWarehouses = newWarehousesList.splice(index, 1)

    res.json(updatedWarehouses);
})

module.exports = router
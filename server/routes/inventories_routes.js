const express = require('express');
const { route } = require('./inventories_routes');
const router = express.Router();
const inventories = require("../inventories.json");
const bodyParser = require("body-parser");
const cors = require('cors');
const fs = require('fs');


router.use(cors());
router.use(bodyParser.json());

// Get inventory objects

router.get('/', (req, res) => {
    const inventories = JSON.parse(fs.readFileSync("./inventories.json"));
    res.send(inventories);
})

// Get single inventory object by id

router.get('/:id', (req, res) => {
    res.send('inventory object');
})

// Create inventory objects 

router.post('/', (req, res) => {
    console.log(req.body);
    const inventoriesData = JSON.parse(fs.readFileSync('./inventories.json'));
    inventoriesData.push(req.body);
    console.log(inventoriesData);
    fs.writeFileSync('./inventories.json', JSON.stringify(inventoriesData), null, 2);
    res.status(201).send({status:'object created'});
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
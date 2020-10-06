const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const warehouses = require("./warehouses.json");
const inventories = require("./inventories.json")
const warehousesRoute = require('./routes/warehouses_routes');
const inventoriesRoute = require('./routes/inventories_routes');

app.use(cors());
app.use(bodyParser.json());

app.use('/warehouses', warehousesRoute);

app.use('/inventories', inventoriesRoute);

// app.get('/warehouses', (req, res) => {
//     res.send(warehouses);
// })
// 
// app.get('/warehouses/:id', (req, res) => {
//     const warehouse = warehouses.find(warehouseObject => warehouseObject.id === req.params.id);
// })
// 
// app.get('/inventories', (req, res) => {
//     res.send(inventories);
// })
// 
// app.get('/inventories/:id', (req, res) => {
//     const inventory = inventories.find(inventoryObject => inventoryObject.id === req.params.id);
// })


app.listen(8080, () => console.log("Port 8080, testing 1,2,3"));
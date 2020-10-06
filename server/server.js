const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const warehousesRoute = require('./routes/warehouses_routes');
const inventoriesRoute = require('./routes/inventories_routes');

app.use(cors());
app.use(bodyParser.json());


app.use('/warehouses', warehousesRoute);

app.use('/inventories', inventoriesRoute);


app.listen(8080, () => console.log("Port 8080, testing 1,2,3"));
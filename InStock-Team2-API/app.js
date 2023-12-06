const express = require('express');
const cors = require('cors');
const routerW = require('./routers/router-warehouses');
const routerI = require('./routers/router-inventories');

const app = express();
const path = require('path');

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '/dev-data/public')));

app.use('/warehouses', routerW);
app.use('/inventory', routerI);

module.exports = app;

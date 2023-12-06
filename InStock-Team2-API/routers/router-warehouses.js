const express = require('express');
const controllerW = require('../controllers/controllers-warehouses');

const router = express.Router();

router
  .route('/')
  .get(controllerW.getAllWarehouses)
  .post(controllerW.postNewWarehouse);

router
  .route('/:id')
  .get(controllerW.getWarehouseById)
  .put(controllerW.editWarehouseById)
  .delete(controllerW.deleteWarehouseById);

router
  .route('/getInventoriesByWarehouseId/:id')
  .get(controllerW.getInventorieswithWarehouse);

module.exports = router;

const knex = require('knex')(require('../knexfile'));

exports.getAllWarehouses = (req, res) => {
  knex('warehouses')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving data: ${err}`));
};

exports.postNewWarehouse = (req, res) => {
  knex('warehouses')
    .insert(req.body)
    .then((result) => {
      return knex('warehouses').where({ id: result[0] });
    })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: `Unable to retrieve warehouse `,
      });
    });
};

exports.getWarehouseById = (req, res) => {
  knex('warehouses')
    .where({ id: req.params.id })
    .then((warehouse) => {
      if (warehouse.length === 0) {
        return res
          .status(404)
          .json({ message: `Warehouse with ID: ${req.params.id} not found` });
      }

      const warehouseData = warehouse;

      res.status(200).json(warehouseData);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrieve warehouse data for warehouse with ID: ${req.params.id}`,
      });
    });
};

exports.editWarehouseById = (req, res) => {
  knex('warehouses')
    .where({ id: req.params.id })
    .update(req.body)
    .then(() => {
      return knex('warehouses').where({
        id: req.params.id,
      });
    })
    .then((updatedWarehouse) => {
      res.json(updatedWarehouse[0]);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to update inventory with ID: ${req.params.id}`,
      });
    });
};

exports.deleteWarehouseById = (req, res) => {
  knex('warehouses')
    .where({ id: req.params.id })
    .del()
    .then((result) => {
      if (result === 0) {
        return res.status(400).json({
          message: `warehouse ID: ${req.params.id} to be deleted not found.`,
        });
      }
      // no content response
      res.status(204).send();
    })
    .catch((err) => {
      res.status(500).json({ message: 'Unable to delete user' });
    });
};

exports.getInventorieswithWarehouse = (req, res) => {
  knex('warehouses')
    .where({ id: req.params.id })
    .then((warehouse) => {
      knex('inventories')
        .where({ warehouse_id: warehouse[0].id })
        .then((inventory) => {
          if (inventory.length === 0) {
            return res.status(404).json({
              message: `Inventory with ID: ${req.params.id} not found`,
            });
          }

          const inventoryData = inventory;

          res.status(200).json(inventoryData);
        })
        .catch(() => {
          res.status(500).json({
            message: `Unable to retrieve inventory data for inventory with ID: ${req.params.id}`,
          });
        });
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrieve warehouse data for warehouse with ID: ${req.params.id}`,
      });
    });
};

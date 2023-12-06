import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import InputAllTextType from '../InputAllTextType/InputAllTextType';
import axios from 'axios';
import Button from '../Button/Button';
import './InventoryNewItemForm.scss';

const InventoryNewItemForm = () => {
  const [allWarehouses, setAllWarehouses] = useState();
  const [quantityShow, setQuantityShow] = useState(true);
  const [statusChecked, setStatusChecked] = useState('In Stock');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8888/warehouses').then((response) => {
      setAllWarehouses(response.data);
    });
  }, []);

  function handleChange(event) {
    if (event.target.value === 'In Stock') {
      setQuantityShow(true);
      setStatusChecked('In Stock');
    }
    if (event.target.value === 'Out of Stock') {
      setQuantityShow(false);
      setStatusChecked('Out Of Stock');
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.target.warehouse.value === 'Please select') {
      alert('Pleate choose a warehouse from the list!!');
      return;
    }
    const warehousechosen = allWarehouses.find(
      (warehouse) => warehouse.warehouse_name === event.target.warehouse.value
    );

    const newInventoryObj = {
      warehouse_id: warehousechosen.id,
      item_name: event.target.name.value,
      description: event.target.description.value,
      category: event.target.category.value,
      status: event.target.status.value,
      quantity: Number(event.target.quantity?.value) || 0,
    };

    const validate = () => {
      const errors = {};

      if (!newInventoryObj.warehouse_id) {
        errors.warehouse = 'Please choose a warehouse from the list';
      }
      if (
        newInventoryObj.status === 'Out of Stock' &&
        newInventoryObj.quantity !== 0
      ) {
        errors.quantity = 'Out of Stock items must have a quantity of 0';
      }
      if (
        newInventoryObj.status === 'In Stock' &&
        parseInt(newInventoryObj.quantity) <= 0
      ) {
        errors.quantity2 = 'This item is in stock. Quantity must be > 0 !';
      }
      if (
        newInventoryObj.status === 'Out of Stock' &&
        parseInt(newInventoryObj.quantity) > 0
      ) {
        errors.quantity3 = 'This item is out of stock. Quantity must be = 0 !';
      }
      if (!newInventoryObj.item_name) {
        errors.item_name = 'Item name is required';
      }
      if (!newInventoryObj.description) {
        errors.description = 'Description is required';
      }
      if (!newInventoryObj.category) {
        errors.category = 'Category is required';
      }
      return errors;
    };
    const errors = validate();
    if (errors.warehouse) {
      alert('please choose a warehouse from list!');
      event.target.warehouse.style.border = '1px solid red';
      return;
    }
    if (errors.item_name) {
      alert('please correct the item name!');
      event.target.name.style.border = '1px solid red';
      return;
    }
    if (errors.description) {
      alert('please correct the description!');
      event.target.description.style.border = '1px solid red';
      return;
    }
    if (errors.category) {
      alert('please correct the category!');
      event.target.category.style.border = '1px solid red';
      return;
    }
    if (errors.quantity || errors.quantity2 || errors.quantity3) {
      alert('please check the status and insert a proper quatity for it!');
      event.target.quantity.style.border = '1px solid red';
      return;
    }

    if (Object.keys(errors).length !== 0) {
      alert(
        `Please check all the fields again:\n1-One warehouse must be chosen!\n2-Status and quantity must match!\n3-Inventory quantity must be >0!\n4-Inventory name and description and category must be filled!`
      );
      return errors;
    } else {
      console.log(newInventoryObj);

      axios
        .post('http://localhost:8888/inventory', newInventoryObj)
        .then((response) => {
          event.target.reset();
          alert('New Inventory added successfully!');
          navigate('/inventory');
        });
    }
  };

  return (
    <form className="container InventoryNewItemForm" onSubmit={handleSubmit}>
      <div className="InventoryNewItemForm__form">
        <section className="InventoryNewItemForm__form-left">
          <h2>Inventory Detail</h2>
          <InputAllTextType type="smallTxt" label="Name" name="name" />
          <InputAllTextType
            type="description"
            label="Description"
            name="description"
          />
          <InputAllTextType type="smallTxt" label="Category" name="category" />
        </section>
        <section className="InventoryNewItemForm__form-right">
          <h2>Item Availability</h2>
          <div className="InventoryNewItemForm__form-radioBtns">
            <div className="InventoryNewItemForm__form-radioBtns-group">
              <input
                type="radio"
                name="status"
                value="In Stock"
                className=""
                onChange={handleChange}
                checked={statusChecked === 'In Stock'}
              />
              <p className="">In Stock</p>
            </div>

            <div className="InventoryNewItemForm__form-radioBtns-group">
              <input
                type="radio"
                name="status"
                value="Out of Stock"
                className=""
                onChange={handleChange}
                checked={statusChecked === 'Out Of Stock'}
              />
              <p className="">Out of Stock</p>
            </div>
          </div>
          {quantityShow && (
            <InputAllTextType
              type="smallTxt"
              label="Quantity"
              name="quantity"
            />
          )}

          {allWarehouses && (
            <InputAllTextType
              name="warehouse"
              type="dropDown"
              label="Warehouse"
              allWarehouses={allWarehouses}
              value="warehouse_name"
            />
          )}
        </section>
      </div>
      <div className="InventoryNewItemForm__btns">
        <Button
          type="cancel"
          btnTxt="Cancel"
          onClick={() => navigate('/inventory')}
        />
        <Button type="submit" btnTxt="+ Add item" />
      </div>
    </form>
  );
};

export default InventoryNewItemForm;

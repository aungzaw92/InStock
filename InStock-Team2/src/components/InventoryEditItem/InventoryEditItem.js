import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

import InputAllTextType from '../../components/InputAllTextType/InputAllTextType';
import axios from 'axios';
import './InventoryEditItem.scss';

const EditInventoryItemPage = ({ inventoryid, inventory }) => {
  const [allWarehouses, setAllWarehouses] = useState();
  const [statusChecked, setStatusChecked] = useState('In Stock');
  const [quantityShow, setQuantityShow] = useState(true);
  const [err, setErr] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8888/warehouses').then((response) => {
      setAllWarehouses(response.data);
    });
  }, []);

  function handleChange(event) {
    if (
      event.target.value === 'In Stock' ||
      inventory[0].status === 'In Stock' ||
      inventory[0].quantity > 0
    ) {
      setQuantityShow(true);
      setStatusChecked(true);
    }
    if (
      event.target.value === 'Out Of Stock' ||
      inventory[0].status === 'Out Of Stock' ||
      inventory[0].quantity < 0
    ) {
      setQuantityShow(false);
      setStatusChecked(false);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErr({});
    if (event.target.warehouse.value === 'Please select') {
      alert('Pleate choose a warehouse from the list!!');
      return;
    }
    //find warehouse id of warehouse that is chosen in form
    const warehousechosen = allWarehouses.find(
      (warehouse) => warehouse.warehouse_name === event.target.warehouse.value
    );

    const editInventoryObj = {
      id: inventoryid,
      warehouse_id: warehousechosen.id,
      item_name: event.target.name.value,
      description: event.target.description.value,
      category: event.target.category.value,
      status: event.target.status.value,
      quantity: Number(event.target.quantity?.value) || 0,
    };

    //handle form errors

    if (!editInventoryObj.warehouse_id) {
      err['warehouse'] = 'one warehouse must be chosen!';
      return;
    }
    if ((editInventoryObj.status = 'Out of Stock')) {
      editInventoryObj.quantity = 0;
    }
    if (
      (editInventoryObj.status = 'In Stock') &&
      parseInt(editInventoryObj.quantity) < 0
    ) {
      err['quantity'] = 'Status and quantity must match!';
      alert(
        'This Inventory is in stock. the Quantity must be bigger that zero!'
      );
      return;
    }
    if (
      !editInventoryObj.item_name ||
      !editInventoryObj.description ||
      !editInventoryObj.category
    ) {
      err['nameORdescriptionORcategory'] = 'All field should be filled!';
      return;
    }
    if (Object.keys(err).length !== 0) {
      alert(
        `Please check all the fields again:\n1-One warehouse must be chosen!\n2-Status and quantity must match!\n3-Inventory quantity must be >0!\n4-Inventory name and description and category must be filled!`
      );
      return;
    }
    console.log(editInventoryObj);
    setErr({});
    axios
      .put(`http://localhost:8888/inventory/${inventoryid}`, editInventoryObj)
      .then((res) => {
        console.log(res);
        event.target.reset();
        alert(' inventory item modified successfully :)');
        navigate('/inventory');
      })
      .catch((err) => {
        err.response
          ? console.error(err.response.data)
          : alert('cant connect to server');
      });
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className=" InventoryEditForm__form">
        <section className="InventoryEditForm__form-left">
          <h2>Item Details </h2>

          <InputAllTextType
            type="smallTxt"
            label="Name"
            name="name"
            value={inventory[0].item_name}
          />
          <InputAllTextType
            type="description"
            label="Description"
            name="description"
            value={inventory[0].description}
          />
          <InputAllTextType
            type="smallTxt"
            label=" Category"
            name="category"
            value={inventory[0].category}
          />
        </section>
        <section className="InventoryEditForm__form-right">
          <h2>Item Availability</h2>
          <div className="InventoryEditForm__form-radioBtns">
            <div className="InventoryEditForm__form-radioBtns-group">
              <input
                type="radio"
                name="status"
                value="In Stock"
                className=""
                checked={statusChecked}
                onChange={handleChange}
              />
              <p className="">In Stock</p>
            </div>
            <div className="InventoryEditForm__form-radioBtns-group">
              <input
                type="radio"
                name="status"
                value="Out of Stock"
                className=""
                checked={statusChecked}
                onChange={handleChange}
              />
              <p className="">Out of Stock</p>
            </div>
          </div>

          <div>
            {quantityShow && (
              <InputAllTextType
                type="smallTxt"
                label="Quantity"
                name="quantity"
                value={inventory[0].quantity}
              />
            )}
          </div>
          <div>
            {allWarehouses && (
              <InputAllTextType
                type="dropDown"
                label="Warehouse"
                name="warehouse"
                allWarehouses={allWarehouses}
                value={inventory[0].warehouse_id}
              />
            )}
          </div>
        </section>
      </div>
      <div className="InventoryEditFormbottom__btns">
        <Button
          type="cancel"
          btnTxt="Cancel"
          onClick={() => navigate('/inventory')}
        />
        <Button
          btnTxt="Save"
          type="submit"
          // onClick={() => navigate('/inventory')}
        />
      </div>
    </form>
  );
};

export default EditInventoryItemPage;

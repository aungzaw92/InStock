import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import InputAllTextType from '../InputAllTextType/InputAllTextType';
import Button from '../Button/Button';
import axios from 'axios';

import './WarehouseEditForm.scss';

const WarehouseEditForm = ({ warehouse, warehouseid }) => {
  const navigate = useNavigate();
  const [allWarehouses, setAllWarehouses] = useState();

  useEffect(() => {
    axios.get('http://localhost:8888/warehouses').then((response) => {
      setAllWarehouses(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const editWarehouseObj = {
      warehouse_name: event.target.name.value,
      address: event.target.address.value,
      city: event.target.city.value,
      country: event.target.country.value,
      contact_name: event.target.contactName.value,
      contact_position: event.target.position.value,
      contact_phone: event.target.phNumber.value,
      contact_email: event.target.email.value,
    };

    console.log(editWarehouseObj);
    axios
      .put(`http://localhost:8888/warehouses/${warehouseid}`, editWarehouseObj)
      .then((res) => {
        console.log(res.data);

        event.target.reset();
        alert(' warehouse item modified successfully :)');
        navigate('/warehouses');
      })
      .catch((err) => {
        err.response
          ? console.error(err.response.data)
          : alert('cant connect to server');
      });
  };

  return (
    <form className="container WarehouseEditForm" onSubmit={handleSubmit}>
      <div className="WarehouseEditForm__form">
        <div className="WarehouseEditForm__formTxt">
          <section className="WarehouseEditForm__formTxt-left">
            <h2>Warehouse Details</h2>
            <InputAllTextType
              type="smallTxt"
              label="Warehouse Name"
              name="name"
              value={warehouse[0].warehouse_name}
            />
            <InputAllTextType
              type="smallTxt"
              label="Street Address"
              name="address"
              value={warehouse[0].address}
            />
            <InputAllTextType
              type="smallTxt"
              label="City"
              name="city"
              value={warehouse[0].city}
            />
            <InputAllTextType
              type="smallTxt"
              label="Country"
              name="country"
              value={warehouse[0].country}
            />
          </section>
          <section className="WarehouseEditForm__formTxt-right">
            <h2>Contact Details</h2>
            <InputAllTextType
              type="smallTxt"
              label="Contact Name"
              name="contactName"
              value={warehouse[0].contact_name}
            />
            <InputAllTextType
              type="smallTxt"
              label="Position"
              name="position"
              value={warehouse[0].contact_position}
            />
            <InputAllTextType
              type="smallTxt"
              label="Phone number"
              name="phNumber"
              value={warehouse[0].contact_phone}
            />
            <InputAllTextType
              type="smallTxt"
              label="Email"
              name="email"
              value={warehouse[0].contact_email}
            />
          </section>
        </div>
        <div className="WarehouseEditForm__btns">
          <Button
            type="cancel"
            btnTxt="Cancel"
            onClick={() => navigate('/warehouses')}
          />
          <Button type="submit" btnTxt="Save" />
        </div>
      </div>
    </form>
  );
};
export default WarehouseEditForm;

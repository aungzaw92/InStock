import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import InputAllTextType from '../InputAllTextType/InputAllTextType';
import Button from '../Button/Button';
import './WarehouseNewForm.scss';

const WarehouseNewForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newWarehouseObj = {
      warehouse_name: event.target.name.value,
      address: event.target.address.value,
      city: event.target.city.value,
      country: event.target.country.value,
      contact_name: event.target.contactName.value,
      contact_position: event.target.position.value,
      contact_phone: event.target.phNumber.value,
      contact_email: event.target.email.value,
    };

    const validate = () => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      const phoneRegex =
        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
      if (!newWarehouseObj.warehouse_name) {
        errors.warehouse_name = 'Warehouse Name is required';
        event.target.name.style.border = '1px solid red';
      } else {
        event.target.name.style.border = '';
      }
      if (!newWarehouseObj.address) {
        errors.address = 'Street Address is required';
        event.target.address.style.border = '1px solid red';
      } else {
        event.target.address.style.border = '';
      }
      if (!newWarehouseObj.city) {
        errors.city = 'City is required';
        event.target.city.style.border = '1px solid red';
      } else {
        event.target.city.style.border = '';
      }
      if (!newWarehouseObj.country) {
        errors.country = 'Country is required';
        event.target.country.style.border = '1px solid red';
      } else {
        event.target.country.style.border = '';
      }
      if (!newWarehouseObj.contact_name) {
        errors.contact_name = 'Contact details is required';
        event.target.contactName.style.border = '1px solid red';
      } else {
        event.target.contactName.style.border = '';
      }
      if (!newWarehouseObj.contact_position) {
        errors.contact_position = 'Position is required';
        event.target.position.style.border = '1px solid red';
      } else {
        event.target.position.style.border = '';
      }
      if (!newWarehouseObj.contact_phone) {
        errors.contact_phone = 'Phone number is required';
        event.target.phNumber.style.border = '1px solid red';
      } else if (!phoneRegex.test(newWarehouseObj.contact_phone)) {
        errors.contact_phone = 'This is not a valid phone number';
        event.target.phNumber.style.border = '1px solid red';
      } else {
        event.target.phNumber.style.border = '';
      }
      if (!newWarehouseObj.contact_email) {
        errors.contact_email = 'Email is required';
        event.target.email.style.border = '1px solid red';
      } else if (!regex.test(newWarehouseObj.contact_email)) {
        errors.contact_email = 'This is not a valid contact_email format!';
        event.target.email.style.border = '1px solid red';
      } else {
        event.target.email.style.border = '';
      }
      console.log(errors);
      if (Object.keys(errors).length > 0) {
        console.log(errors);
        alert('Please fill all fields!');
        return errors;
      }
      return null;
    };
    const allerrors = validate();

    if (allerrors) {
      return;
    } else {
      axios
        .post('http://localhost:8888/warehouses', newWarehouseObj)
        .then((response) => {
          event.target.reset();
          alert('New Warehouse added successfully!');
          navigate('/warehouses');
        });
    }
  };

  return (
    <div className="container">
      <form className=" WarehouseNewForm" onSubmit={handleSubmit}>
        <div className="WarehouseNewForm__form">
          <div className="WarehouseNewForm__formTxt">
            <section className="WarehouseNewForm__formTxt-left">
              <h2>Warehouse Details</h2>
              <InputAllTextType
                type="smallTxt"
                label="Warehouse Name"
                name="name"
              />
              <InputAllTextType
                type="smallTxt"
                label="Street Address"
                name="address"
              />
              <InputAllTextType type="smallTxt" label="City" name="city" />
              <InputAllTextType
                type="smallTxt"
                label="Country"
                name="country"
              />
            </section>

            <section className="WarehouseNewForm__formTxt-right">
              <h2>Contact Details</h2>
              <InputAllTextType
                type="smallTxt"
                label="Contact Name"
                name="contactName"
              />
              <InputAllTextType
                type="smallTxt"
                label="Position"
                name="position"
              />
              <InputAllTextType
                type="smallTxt"
                label="Phone number"
                name="phNumber"
              />
              <InputAllTextType type="smallTxt" label="Email" name="email" />
            </section>
          </div>

          <div className="WarehouseNewForm__btns">
            <Button
              type="cancel"
              btnTxt="Cancel"
              onClick={() => navigate('/warehouses')}
            />
            <Button type="submit" btnTxt="+ Add warehouse" />
          </div>
        </div>
      </form>
    </div>
  );
};
export default WarehouseNewForm;

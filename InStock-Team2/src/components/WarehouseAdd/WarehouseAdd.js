import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import url from '../../utils/utils';
import backArrow from '../../assets/Icons/arrow_back-24px.svg';
import errorIcon from '../../assets/Icons/error-24px.svg';
import axios from 'axios';
import './WarehouseAdd.scss';

class WarehouseAdd extends Component {
  state = {
    warehouseNameError: false,
    addressError: false,
    cityError: false,
    countryError: false,
    contactNameError: false,
    positionError: false,
    phoneNumberError: false,
    emailError: false,
  };

  redirectToHome = () => {
    this.props.history.push('/');
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const isRequired = value.trim() === '';

    this.setState({ [`${name}Error`]: isRequired });
  };

  handlePhoneInput = (event) => {
    const phoneNumber = event.target.value;
    const phoneNumberRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    this.setState({
      phoneNumberError: !phoneNumber || !phoneNumberRegex.test(phoneNumber),
    });
  };

  handleEmailInput = (event) => {
    const email = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    this.setState({ emailError: !email || !emailRegex.test(email) });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      warehouseNameError,
      addressError,
      cityError,
      countryError,
      contactNameError,
      positionError,
      phoneNumberError,
      emailError,
    } = this.state;

    if (
      !warehouseNameError &&
      !addressError &&
      !cityError &&
      !countryError &&
      !contactNameError &&
      !positionError &&
      !phoneNumberError &&
      !emailError
    ) {
      axios
        .post(`${url}warehouse`, {
          warehouseName: event.target.warehouseName.value,
          address: event.target.address.value,
          city: event.target.city.value,
          country: event.target.country.value,
          contactName: event.target.contactName.value,
          position: event.target.position.value,
          phone: event.target.phone.value,
          email: event.target.email.value,
        })
        .then(() => {
          this.redirectToHome();
        })
        .catch((error) => console.error(error));
    }
  };

  render() {
    const {
      warehouseNameError,
      addressError,
      cityError,
      countryError,
      contactNameError,
      positionError,
      phoneNumberError,
      emailError,
    } = this.state;

    return (
      <section className="warehouse-add">
        <div className="warehouse-add__container">
          <div className="warehouse-add__header">
            <Link className="warehouse-add__link" to="/warehouse">
              <img
                src={backArrow}
                alt="Back Arrow to return to warehouse page"
                className="warehouse-add__back-icon"
              />
            </Link>
            <h2 className="warehouse-add__title">Add New Warehouse</h2>
          </div>

          <form className="warehouse-add__form" onSubmit={this.handleSubmit}>
            <div className="warehouse-add__form-wrapper">
              <div className="warehouse-add__form-left">
                <div className="warehouse-add__form-container">
                  <h3 className="warehouse-add__form-title">
                    Warehouse Details
                  </h3>
                  <label className="warehouse-add__form-label">
                    Warehouse Name
                    <input
                      type="text"
                      name="warehouseName"
                      placeholder="Warehouse Name"
                      className="warehouse-add__form-input"
                      onChange={this.handleInputChange}
                    />
                  </label>
                  {warehouseNameError && (
                    <div className="error">
                      <img
                        src={errorIcon}
                        alt="Error Icon"
                        className="error__icon"
                      />
                      <p className="error__text">This field is required</p>
                    </div>
                  )}

                  <label className="warehouse-add__form-label">
                    Street Address
                    <input
                      type="text"
                      name="address"
                      placeholder="Street Address"
                      className="warehouse-add__form-input"
                      onChange={this.handleInputChange}
                    />
                  </label>
                  {addressError && (
                    <div className="error">
                      <img
                        src={errorIcon}
                        alt="Error Icon"
                        className="error__icon"
                      />
                      <p className="error__text">This field is required</p>
                    </div>
                  )}

                  <label className="warehouse-add__form-label">
                    City
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      className="warehouse-add__form-input"
                      onChange={this.handleInputChange}
                    />
                  </label>
                  {cityError && (
                    <div className="error">
                      <img
                        src={errorIcon}
                        alt="Error Icon"
                        className="error__icon"
                      />
                      <p className="error__text">This field is required</p>
                    </div>
                  )}

                  <label className="warehouse-add__form-label">
                    Country
                    <input
                      type="text"
                      name="country"
                      placeholder="Country"
                      className="warehouse-add__form-input"
                      onChange={this.handleInputChange}
                    />
                  </label>
                  {countryError && (
                    <div className="error">
                      <img
                        src={errorIcon}
                        alt="Error Icon"
                        className="error__icon"
                      />
                      <p className="error__text">This field is required</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="warehouse-add__form-right">
                <div className="warehouse-add__form-container">
                  <h3 className="warehouse-add__form-title">Contact Details</h3>
                  <label className="warehouse-add__form-label">
                    Contact Name
                    <input
                      type="text"
                      name="contactName"
                      placeholder="Contact Name"
                      className="warehouse-add__form-input"
                      onChange={this.handleInputChange}
                    />
                  </label>
                  {contactNameError && (
                    <div className="error">
                      <img
                        src={errorIcon}
                        alt="Error Icon"
                        className="error__icon"
                      />
                      <p className="error__text">This field is required</p>
                    </div>
                  )}

                  <label className="warehouse-add__form-label">
                    Position
                    <input
                      type="text"
                      name="position"
                      placeholder="Position"
                      className="warehouse-add__form-input"
                      onChange={this.handleInputChange}
                    />
                  </label>
                  {positionError && (
                    <div className="error">
                      <img
                        src={errorIcon}
                        alt="Error Icon"
                        className="error__icon"
                      />
                      <p className="error__text">This field is required</p>
                    </div>
                  )}

                  <label className="warehouse-add__form-label">
                    Phone Number
                    <input
                      name="phone"
                      placeholder="Phone Number"
                      className="warehouse-add__form-input"
                      onChange={this.handlePhoneInput}
                    />
                  </label>
                  {phoneNumberError && (
                    <div className="error">
                      <img
                        src={errorIcon}
                        alt="Error Icon"
                        className="error__icon"
                      />
                      <p className="error__text">
                        Please enter a valid phone number
                      </p>
                    </div>
                  )}

                  <label className="warehouse-add__form-label">
                    Email
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="warehouse-add__form-input"
                      onChange={this.handleEmailInput}
                    />
                  </label>
                  {emailError && (
                    <div className="error">
                      <img
                        src={errorIcon}
                        alt="Error Icon"
                        className="error__icon"
                      />
                      <p className="error__text">
                        Please enter a valid email address
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="buttons">
              <div className="buttons__container">
                <button onClick={this.redirectToHome} className="button">
                  Cancel
                </button>

                <button className="button button--special" type="submit">
                  + Add Warehouse
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default WarehouseAdd;

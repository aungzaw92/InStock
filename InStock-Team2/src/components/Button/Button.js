import React from 'react';
import editIcn from '../../assets/Icons/edit-24px-white.svg';
import './Button.scss';
const Button = ({ btnTxt, onClick }) => {
  let classbtn;
  if (btnTxt === 'Cancel') {
    classbtn = 'cancel';
  } else if (btnTxt === 'Edit') {
    classbtn = 'edit';
  } else if (btnTxt === 'Delete') {
    classbtn = 'delete';
  } else if (btnTxt === 'Warehouses' || btnTxt === 'Inventory') {
    classbtn = 'headerBtn';
  } else if (!btnTxt) {
    classbtn = 'noshow';
  } else {
    classbtn = '';
  }
  return (
    <button className={`button button--${classbtn}`} type="" onClick={onClick}>
      {btnTxt === 'Edit' ? (
        <img
          src={editIcn}
          alt="pen as edit icon"
          className="button--edit-icon"
        />
      ) : null}
      {btnTxt}
    </button>
  );
};
export default Button;

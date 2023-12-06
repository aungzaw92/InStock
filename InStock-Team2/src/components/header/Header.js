import { useNavigate } from "react-router-dom";
import "../header/Header.scss";
import Logo from "./Logo";
import Button from "../Button/Button";
import React from "react";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header__nav">
      <div className="header__nav-box1">
        <Logo />
      </div>
      <div className="header__nav-box2">
        <Button btnTxt="Warehouses" onClick={() => navigate(`/warehouses`)} />
        <Button btnTxt="Inventory" onClick={() => navigate(`/inventory`)} />
      </div>
    </div>
  );
}

export default Header;

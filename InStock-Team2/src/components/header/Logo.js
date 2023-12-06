import logo from "../../assets/Logo/InStock-Logo_1x.png";
import React from "react";

function Logo() {
  return (
    <div className="Header">
      <header className="header__logo">
        <img alt="logo" src={logo} />
      </header>
    </div>
  );
}

export default Logo;

import React from "./node_modules/react";
// import { NavLink } from 'react-router-dom';
import Logo from "../../assets/logo/InStock-Logo_2x.png";
import { Link } from "./node_modules/react-router-dom";

import "./Header.scss";

const Header = () => {

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo-container">
          <Link to="/">
            <img src={Logo} className="navbar__img" alt="Instock" />
          </Link>
        </div>
        <div className="navbar__links">
          <ul className="navbar__list">
            <Link
              to="/warehouses"
              className="navbar__link navbar__warehouses navbar__warehouses--active"
            //   activeClassName="navbar__warehouses--active"
            >
              Warehouses
            </Link>
            <Link
              to="/inventories"
              className="navbar__link navbar__inventory"
              activeClassName="navbar__warehouses--active"
            >
              Inventory
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

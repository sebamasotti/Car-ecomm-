import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { NavLink } from "reactstrap";
import SearchForm from "./SearchForm";

const Navbar = () => {
  return (
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h1 className="logo">
          <NavLink>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                padding: "1rem",
              }}
            >
              CarShopp 🚙
            </Link>{" "}
          </NavLink>
        </h1>
        <ul className="navbar-nav me-center"
            style={{margin: '1rem'}}>
          <NavLink>
            <Link
              to="/category/Americano"
              style={{ textDecoration: "none", color: "white" }}
            >
              Americano
            </Link>{" "}
          </NavLink>
          <NavLink>
            <Link
              to="/category/Europeo"
              style={{ textDecoration: "none", color: "white" }}
            >
              Europeo
            </Link>{" "}
          </NavLink>
          <NavLink>
            <Link
              to="/category/Asiatico"
              style={{ textDecoration: "none", color: "white" }}
            >
              Asiatico
            </Link>{" "}
          </NavLink>
        </ul>
          <SearchForm />
        <CartWidget />
      </div>
  );
};

export default Navbar;

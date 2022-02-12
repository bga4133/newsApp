import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Nav Menu
export const Navbar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/login", {
      replace: true
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark bg-white nav-styles ">
      <Link
        className="navbar-brand text-dark logo animate__animated animate__pulse"
        to="/"
      >
        N
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav ">
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link text-dark" +
              (isActive ? "active text-dark" : "")
            }
            to="/new"
          >
            News
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link text-dark" +
              (isActive ? "active text-dark" : "")
            }
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info text-dark userName">
            Brayan
          </span>
          <button
            className="nav-item nav-link btn text-dark"
            onClick={handleLogOut}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};

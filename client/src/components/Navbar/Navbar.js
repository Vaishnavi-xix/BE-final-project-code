import React, { useEffect, useState } from "react";
import "./Navbar.css";
import showToast from "crunchy-toast";
import { Link } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(storageUser);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
    showToast("Logout Successfully!", "success", 4000);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <Link to="/home" className="navbar-title fw-bold fs-2">
        🗑️ E-WASTE
      </Link>

      <button className="navbar-toggle" onClick={toggleNavbar}>
        ☰
      </button>

      <div className={`navbar-links-container ${isOpen ? "open" : ""}`}>
        <Link to="/home" className="navbar-link mx-4 fw-semibold">
          E-Waste Units
        </Link>
        <Link to="/orders" className="navbar-link mx-4 fw-semibold">
          My-order
        </Link>

        {user?.firstname ? (
          <button
            type="button"
            className="navbar-link log-outbtn mx-4 px-4"
            onClick={logout}
          >
            Logout
          </button>
        ) : (
          <span>
            <Link to="/signup" className="navbar-link">
              Signup
            </Link>
            <Link to="/" className="navbar-link">
              login
            </Link>
          </span>
        )}

        <span className="mx-2 fs-5 fw-semibold">👋 Hey {user?.firstname || "User"} !</span>
      </div>
    </div>
  );
}

export default Navbar;

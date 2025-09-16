import React, { useContext, useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);
  const dropdownRef = useRef(null);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(false);
    navigate("/login");
  };

  // Function for NavLink styling
  const linkClass = ({ isActive }) =>
    isActive ? "text-primary" : "text-gray-700 hover:text-primary";

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="flex items-center justify-between px-4 py-3 shadow-sm bg-white">
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        className="w-32 cursor-pointer"
        src={assets.logo}
        alt="Logo"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 font-medium">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/doctors" className={linkClass}>
          Doctors
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {token && userData ? (
          <div className="relative" ref={dropdownRef}>
            <img
              className="w-9 h-9 rounded-full object-cover cursor-pointer"
              src={userData.image}
              alt="Profile"
              onClick={() => setShowDropdown((prev) => !prev)}
            />
            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-44 p-3 text-sm text-gray-700 z-10">
                <p
                  onClick={() => {
                    navigate("/my-profile");
                    setShowDropdown(false);
                  }}
                  className="py-2 px-2 hover:bg-gray-100 rounded-md cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => {
                    navigate("/my-appointments");
                    setShowDropdown(false);
                  }}
                  className="py-2 px-2 hover:bg-gray-100 rounded-md cursor-pointer"
                >
                  Appointments
                </p>
                <p
                  onClick={() => {
                    logout();
                    setShowDropdown(false);
                  }}
                  className="py-2 px-2 hover:bg-gray-100 rounded-md cursor-pointer"
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-5 py-2 rounded-md text-sm"
          >
            Login / Signup
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-7 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt="Menu"
        />
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-20 transform ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 w-3/4`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <img src={assets.logo} className="w-28" alt="Logo" />
          <img
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            className="w-6 cursor-pointer"
            alt="Close"
          />
        </div>
        <ul className="flex flex-col gap-4 p-5 font-medium">
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/"
            className={linkClass}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/doctors"
            className={linkClass}
          >
            Doctors
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/contact"
            className={linkClass}
          >
            Contact
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

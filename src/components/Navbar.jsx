import { NavLink } from "react-router";
import logo from "../assets/Logo .svg";
import { FaHome, FaCalendarAlt } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <header>
      <NavLink to="/" aria-label="Go to homepage">
        <img src={logo} alt="Little Lemon logo" />
      </NavLink>
      <nav aria-label="Primary navigation">
        <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/"
        >
        <FaHome aria-hidden="true" /> Home
        </NavLink>
        <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/menu"
        >
        <MdRestaurantMenu aria-hidden="true" /> Menu
        </NavLink>
        <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/reservation"
        >
        <FaCalendarAlt aria-hidden="true" /> Reservation
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
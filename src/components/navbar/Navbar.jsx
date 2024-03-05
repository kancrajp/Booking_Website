import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">
          <Link
            style={{
              textDecoration: "none",
              color: "#444",
              fontSize: "23px",
              fontWeight: "600",
            }}
            to="/"
          >
            Booking App
          </Link>
        </span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

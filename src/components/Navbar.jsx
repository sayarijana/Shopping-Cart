import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () => {

  const {cart} = useSelector((state) => state);
  return (
    <div className="navDiv">
      <nav className="navItems">
        <NavLink to="/" className="navbar">
            <img src="../logo.png" alt="" className="logoImg"/>
        </NavLink>

        <div className="rightNav">
          <NavLink to="/" className="navbar">
            <p className="pandicon">Home</p>
          </NavLink>
        
          <NavLink to="/cart" className="navbar">
            <div className="trollyIcon">
              <FaShoppingCart className="pandicon2"/>
              {cart.length > 0 &&  <span className="pandicon1">{cart.length}</span>}            
             </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;

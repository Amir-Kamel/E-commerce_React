import { Link } from "react-router";
import { useSelector } from "react-redux";
import { useContext } from "react";
import LanguageContext from "./context/language"; 

const Navbar = () => {
  const totalItems =useSelector (state => state.cart.totalItems)
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Products App</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart: {totalItems}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>

            <li className="nav-item mt-2 ms-2">
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="ar">Arabic</option>
      </select>

      </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

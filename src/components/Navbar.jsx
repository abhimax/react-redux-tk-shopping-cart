import { NavLink } from "react-router-dom";
import "../styles/navbar.scss";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartProductIDs } = useSelector((state) => state.cart);
  return (
    <nav className="navbar">
      <NavLink to="/" end>
        <i className="bi bi-shop-window">
          <span className="logo-text">Abhiman's OLO</span>
        </i>
      </NavLink>

      <NavLink
        to="/cart"
        title="cart"
        className={({ isActive }) => `${isActive && "selected"}`}
      >
        <i className="bi bi-cart3" />
        <sup className="cart-number">{cartProductIDs.length}</sup>
      </NavLink>

      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "selected" : "")}
        title="products"
        end
      >
        <i className="bi bi-grid" />
      </NavLink>
    </nav>
  );
};

export default Navbar;

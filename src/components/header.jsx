import '../styles/header.scss';
import { Link, NavLink } from 'react-router-dom';
//FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

//Navbar logo
import navbarLogo from '../assets/navbar-logo.png';

const Header = () => {
  return (
    <header className="header position-absolute top-0 start-0 w-100">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid px-4">
          {/* burger-menu-button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Navigation menu */}
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase w-100 justify-content-between">
              <li className="nav-item">
                <Link className="nav-link" to="#login">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/products"
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand" to="/">
                  <img src={navbarLogo} alt="logo" />
                </Link>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                  Contacts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/faq"
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                  FAQ
                </NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link cart-icon" to="#cart">
                  <FontAwesomeIcon icon={faCartShopping} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import "./header.scss";
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import logo from "../../assets/img/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";

function Header({ cart }) {
  const { setSearchQuery, searchQuery } = useSearch();
  const [localSearch, setLocalSearch] = useState(searchQuery || "");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(localSearch);
    if (localSearch.trim()) {
      navigate(`/?search=${encodeURIComponent(localSearch.trim())}`);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <header className="header">
        <div className="header__inner">
          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>

          <div className="header__search">
            <form onSubmit={handleSearchSubmit} className="search-box">
              <input
                type="text"
                placeholder="Search for more than 10,000 products"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-button">
                <FaSearch />
              </button>
            </form>
          </div>

          <div className="header__contacts">
            <div className="contact-item">
              <div className="contact-label">Phone</div>
              <div className="contact-number">+980-340-56-56</div>
            </div>
            <div className="contact-item">
              <div className="contact-label">Email</div>
              <div className="contact-number">waggy@gmail.com</div>
            </div>
          </div>
        </div>
      </header>

      <nav className="navigation">
        <div className="nav-content">
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/page">Page</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/offer">Offers</NavLink>
          </div>

          <div className="nav-icons">
            <NavLink to="/account">
              <FaUser />
            </NavLink>

            <NavLink to="/favourites">
              <FaHeart />
            </NavLink>

            <div className="nav-cart">
              <NavLink to="/cart">
                <FaShoppingCart />
              </NavLink>

              {cart?.length > 0 && (
                <span className="cart-count">{cart.length}</span>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
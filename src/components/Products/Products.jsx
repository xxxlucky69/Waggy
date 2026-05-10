import React, { useState } from "react";
import "./products.scss";
import { MdOutlineStar } from "react-icons/md";
import products from "../../assets/data";
import BtnAddToCart from "../BtnAddToCart/BtnAddToCart";
import AddToFav from "../AddToFav/AddToFav";
import { useSearch } from "../../context/SearchContext";
import { NavLink } from "react-router-dom";

function Products({
  cart,
  setCart,
  favourites,
  setFavourites,
  searchQuery: propSearchQuery,
}) {
  const [filter, setFilter] = useState("ALL");
  const { clearSearch, searchQuery: contextSearchQuery } = useSearch();

  const searchTerm = propSearchQuery || contextSearchQuery || "";

  const filtered = products.filter((product) => {
    const matchCategory =
      filter === "ALL" ||
      product.category.toLowerCase() === filter.toLowerCase();

    const matchSearch =
      searchTerm === "" ||
      product.title.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <section className="products">
      <div className="container">

        {/* HEADER */}
        <div className="products__header">
          <div className="products__controls">
            <h2 className="products__title">Products</h2>

            <div className="filters">
              {["ALL", "cat", "dog", "bird"].map((cat) => (
                <span
                  key={cat}
                  className={filter === cat ? "active" : ""}
                  onClick={() => setFilter(cat)}
                >
                  {cat.toUpperCase()}
                </span>
              ))}
            </div>
          </div>

          <NavLink to="/shop">
            <button className="shop-btn">SHOP ALL →</button>
          </NavLink>
        </div>

        {/* SEARCH */}
        {searchTerm && (
          <div className="search-active">
            <span>
              Search results for: "<strong>{searchTerm}</strong>"
            </span>
            <button onClick={clearSearch}>✕</button>
          </div>
        )}

        {/* GRID */}
        <div className="products__grid">
          {filtered.length === 0 ? (
            <div className="no-results">No products found</div>
          ) : (
            filtered.map((product) => (
              <div className="product-card" key={product.id}>
                
                <div className="product__image">
                  <img src={product.img} alt={product.title} />
                </div>

                <div className="product__info">
                  <h3 className="product__name">{product.title}</h3>

                  <div className="product__rating">
                    <MdOutlineStar color="#DEAD6F" />
                    <span>{product.rating}</span>
                  </div>

                  <div className="product__price">
                    ${product.price}
                  </div>

                  <div className="product__actions">
  <div className="add-to-cart">
    <BtnAddToCart
      product={product}
      cart={cart}
      setCart={setCart}
    />
  </div>

  <div className="favorite-btn">
    <AddToFav
      product={product}
      favourites={favourites}
      setFavourites={setFavourites}
    />
  </div>
</div>
                </div>

              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Products;
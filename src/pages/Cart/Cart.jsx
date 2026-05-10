import "./cart.scss";
import products from "../../assets/data";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import { MdOutlineStar } from "react-icons/md";
import { useEffect, useState } from "react";
import CartCount from "../../components/CartCount/CartCount";
import AddToFav from "../../components/AddToFav/AddToFav";
import { Link } from "react-router-dom";

function Cart({ cart, setCart, favourites, setFavourites }) {
  const [cartCheck, setCartCheck] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function deleteAll() {
    setCart([]);
    setCartCheck([]);
    setTotalPrice(0);
  }

  const handleCheckboxChange = (itemId, itemPrice, itemCount) => {
    let price = Number(itemPrice) * itemCount;

    setCartCheck((prev) => {
      if (prev.includes(itemId)) {
        setTotalPrice(totalPrice - price);
        return prev.filter((id) => id !== itemId);
      } else {
        setTotalPrice(totalPrice + price);
        return [...prev, itemId];
      }
    });
  };

  const deleteSelected = () => {
    setCart((prev) =>
      prev.filter((item) => !cartCheck.includes(item.id))
    );
    setCartCheck([]);
    setTotalPrice(0);
  };

  useEffect(() => {
    let sum = 0;

    cart.forEach((item) => {
      if (cartCheck.includes(item.id)) {
        sum += Number(item.price) * (item.count || 1);
      }
    });

    setTotalPrice(sum);
  }, [cart, cartCheck]);

  const selectedItems = cart.filter(item => cartCheck.includes(item.id));

const totalSelectedCount = selectedItems.reduce((sum, item) => {
  return sum + (item.count || 1);
}, 0);

  return (
    <div className="cart">

      {/* HEADER */}
      <div className="cart__header">
        <div className="container cart__header-inner">
          <h1 className="cart__title">Cart</h1>

          <div className="cart__actions">
            <button onClick={deleteSelected}>
              DELETE SELECTED ONES
            </button>
            <button onClick={deleteAll}>
              DELETE ALL PRODUCTS
            </button>
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="container">
        {cart.length > 0 ? (
          <div className="products__grid">

            {cart.map((item) => (
              <div className="product-card" key={item.id}>

                {/* checkbox */}
                <input
                  type="checkbox"
                  className="cart-check"
                  checked={cartCheck.includes(item.id)}
                  onChange={() =>
                    handleCheckboxChange(item.id, item.price, item.count)
                  }
                />

                {/* image */}
                <div className="product__image">
                  <img src={item.img} alt={item.title} />
                </div>

                {/* info */}
                <div className="product__info">

                  <h3 className="product__name">
                    {item.title}
                  </h3>

                  <div className="product__rating">
                    <MdOutlineStar color="#DEAD6F" />
                    <span>{item.rating}</span>
                  </div>

                  <div className="product__price">
                    ${item.price * item.count}
                  </div>

                  {/* actions */}
                  <div className="product__actions1">

                    <CartCount
                      cartID={item.id}
                      setCart={setCart}
                      cart={cart}
                      cartCount={item.count}
                    />
<div className="cart-like-btn">
                    <AddToFav
                      product={item}
                      setFavourites={setFavourites}
                      favourites={favourites}
                    />
</div>
                  </div>

                </div>

              </div>
            ))}

          </div>
        ) : (
          <EmptyCart />
        )}
      </div>

      {/* TOTAL */}
      {cart.length > 0 && (
  <div className="cart__total">
        <div className="container cart__total-inner">

          <div className="cart__total-price">
  
  <span className="total-label">
    Total: {totalSelectedCount} product{totalSelectedCount !== 1 ? "s" : ""}
  </span>

  <span className="total-sum">
    $ {totalPrice}
  </span>

</div>

          <Link to="/" className="cart__pay-btn">
            PLACE AN ORDER
          </Link>

        </div>
        </div>
)}

    </div>
  );
}

export default Cart;
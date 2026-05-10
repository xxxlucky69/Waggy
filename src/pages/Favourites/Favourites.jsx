import { MdOutlineStar } from "react-icons/md";
import products from "../../assets/data";
import EmptyFav from "../../components/EmptyFav/EmptyFav";
import BtnAddToCart from "../../components/BtnAddToCart/BtnAddToCart";
import AddToFav from "../../components/AddToFav/AddToFav";
import "./favourites.scss";
import { FaHeart } from "react-icons/fa";

function Favourites({ cart, setCart, favourites, setFavourites }) {
  const deleteAll = () => {
    setFavourites([]);
  };

  const favProducts = products.filter((p) =>
    favourites.includes(p.id)
  );

  return (
    <section className="favourites">

      {/* HEADER */}
      <div className="favourites__header">
        <div className="container favourites__header-inner">
          <h1 className="favourites__title">Favourites</h1>

          {favourites.length > 0 && (
            <button
              className="remove-btn"
              onClick={deleteAll}
            >
              REMOVE ALL
            </button>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="container">
        {favProducts.length > 0 ? (
          <div className="products__grid">
            {favProducts.map((product) => (
              <div className="product-card" key={product.id}>

  <button
    className="fav-remove"
    onClick={() =>
      setFavourites((prev) =>
        prev.filter((id) => id !== product.id)
      )
    }
  >
    <FaHeart />
  </button>

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
      <BtnAddToCart
        product={product}
        cart={cart}
        setCart={setCart}
      />
    </div>
  </div>
</div>
            ))}
          </div>
        ) : (
          <EmptyFav />
        )}
      </div>
    </section>
  );
}

export default Favourites;
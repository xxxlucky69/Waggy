import { useState } from 'react';
import './products.scss';

const Products = ({ addToCart, searchQuery }) => {
  const [filter, setFilter] = useState('ALL');
  
  const products = [
    {
      id: 1,
      img: '/img/product1.png',
      title: 'Dry food',
      rating: '4.0',
      price: '$18.00',
      category: 'dog',
    },
    {
      id: 2,
      img: '/img/product2.png',
      title: 'Canned dog food',
      rating: '4.0',
      price: '$8.00',
      category: 'dog',
    },
    {
      id: 3,
      img: '/img/product3.png',
      title: 'Treats for cats',
      rating: '5.0',
      price: '$5.00',
      category: 'cat',
    },
    {
      id: 4,
      img: '/img/product4.png',
      title: 'Pate for dogs',
      rating: '5.0',
      price: '$7.00',
      category: 'dog',
    },
    {
      id: 5,
      img: '/img/product5.png',
      title: 'Dry cat food',
      rating: '3.0',
      price: '$10.00',
      category: 'cat',
    },
    {
      id: 6,
      img: '/img/product6.png',
      title: 'Food for parrots',
      rating: '5.0',
      price: '$12.00',
      category: 'bird',
    },
    {
      id: 7,
      img: '/img/product7.png',
      title: 'Canned dog food',
      rating: '4.5',
      price: '$15.00',
      category: 'dog',
    },
    {
      id: 8,
      img: '/img/product8.png',
      title: 'Сandy for cats',
      rating: '5.0',
      price: '$3.00',
      category: 'cat',
    },
  ];
  

  const filteredProducts = products.filter(product => {
    const matchText = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    
    const matchCategory = filter === 'ALL' || 
      product.category.toLowerCase() === filter.toLowerCase();
    
    return matchText && matchCategory;
  });

  return (
    <section className="products">
      <div className="container">
        <div className="products__header">
          <div className='products__controls'>
            <h2 className="products__title">Products</h2>
            <div className="filters">
              <a 
                className={filter === 'ALL' ? 'active' : ''} 
                onClick={() => setFilter('ALL')}
                style={{ cursor: 'pointer' }}
              >
                ALL
              </a>
              <a 
                className={filter === 'cat' ? 'active' : ''} 
                onClick={() => setFilter('cat')}
                style={{ cursor: 'pointer' }}
              >
                CAT
              </a>
              <a 
                className={filter === 'dog' ? 'active' : ''} 
                onClick={() => setFilter('dog')}
                style={{ cursor: 'pointer' }}
              >
                DOG
              </a>
              <a 
                className={filter === 'bird' ? 'active' : ''} 
                onClick={() => setFilter('bird')}
                style={{ cursor: 'pointer' }}
              >
                BIRD
              </a>
            </div>
          </div>
          
          <div className="products__controls">
            <button className="shop-btn">SHOP ALL →</button>
          </div>
        </div>
        
        <div className="products__grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product__image">
                  <img src={product.img} alt={product.title} />
                </div>
                <div className="product__info">
                  <h3 className="product__name">{product.title}</h3>
                  <div className="product__rating">
                    <img src='/img/star.svg' alt="rating star"/>
                    <span className="rating-value">{product.rating}</span>
                  </div>
                  <div className="product__price">{product.price}</div>
                  <div className="product__actions">
                    <button 
                      className="add-to-cart" 
                      onClick={addToCart}
                    >
                      ADD TO CART
                    </button>
                    <button className="favorite-btn">
                      <img src='/img/heart.svg' alt="favorite"/>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              Товары не найдены
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
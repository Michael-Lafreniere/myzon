import React from 'react';
// Style:
import './CheckoutProduct.css';

function CheckoutProduct({ key, title, image, price, rating }) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__img" src={image} alt="Product" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="star">
                ⭐
              </span>
            ))}
        </div>
        <button>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

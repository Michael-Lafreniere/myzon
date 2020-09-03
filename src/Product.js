import React from 'react';
// State:
import { useStateValue } from './StateProvider';
// Styling:
import './Product.css';

function Product({ id, rating, price, title, image }) {
  const [, /*{ cart }*/ dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="star">
                ⭐
              </span>
            ))}
        </div>
      </div>
      <img src={image} alt="Product" />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;

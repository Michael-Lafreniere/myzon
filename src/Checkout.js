import React from 'react';
// State:
import { useStateValue } from './StateProvider';
// Our components:
import Ad from './Ad';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
// Style:
import './Checkout.css';

function Checkout() {
  const [{ cart }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <Ad />
        {cart?.length === 0 ? (
          <div>
            <h2 className="checkout__title">Your Shopping Cart is Empty</h2>
            <p>
              You have no items currently in your cart. To buy an item, click
              "Add to Cart" under an item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Cart</h2>
            {cart?.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;

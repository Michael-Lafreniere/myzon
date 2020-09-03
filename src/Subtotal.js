import React from 'react';
import NumberFormat from 'react-currency-format';
// State:
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';
// Styles:
import './Subtotal.css';

function Subtotal() {
  const [{ cart }] = useStateValue();

  return (
    <div className="subtotal">
      <NumberFormat
        value={getCartTotal(cart)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        decimalScale={2}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;

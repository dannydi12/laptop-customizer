import React from 'react';
import Item from '../Item/Item'
import './Cart.css';

function Cart(props) {
  const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  const total = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost,
    0
  );

  const summary = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.selected[feature];
    return <Item key={featureHash} 
    feature={feature} 
    name={selectedOption.name} 
    cost={selectedOption.cost} />
    }
  );

  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {summary}
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {USCurrencyFormat.format(total)}
        </div>
      </div>
    </section>
  )
}

export default Cart;
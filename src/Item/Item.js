import React from 'react';
import './Item.css';

function Item(props) {
  const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  return (
    <div className="summary__option">
      <div className="summary__option__label">{props.feature} </div>
      <div className="summary__option__value">{props.name}</div>
      <div className="summary__option__cost">
        {USCurrencyFormat.format(props.cost)}
      </div>
    </div>
  )
}

export default Item;
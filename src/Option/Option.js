import React from 'react';
import slugify from 'slugify';
import './Option.css';

function Option(props) {
  const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  return (
    <div className="feature__item">
      <input
        type="radio"
        id={props.itemHash}
        className="feature__option"
        name={slugify(props.name)}
        checked={props.name === props.selected[props.feature].name}
        onChange={e => props.updateFeature(props.feature, props.name)}
      />
      <label htmlFor={props.itemHash} className="feature__label">
        {props.name} ({USCurrencyFormat.format(props.cost)})
      </label>
    </div>
  )
}

export default Option;
import React from 'react';
import slugify from 'slugify';
import Option from '../Option/Option';
import './Feature.css';

function Feature(props) {
  const options = props.options.map(option => {
    const optionHash = slugify(JSON.stringify(option.name));
    return <Option 
      key={optionHash} 
      updateFeature={props.updateFeature} 
      itemHash={optionHash} 
      name={option.name} 
      feature={props.feature} 
      selected={props.selected} 
      cost={option.cost}/>
  });

  return (
    <fieldset className="feature">
        <legend className="feature__name">
          <h3>{props.feature}</h3>
        </legend>
        {options}
      </fieldset>
  )
}

export default Feature;
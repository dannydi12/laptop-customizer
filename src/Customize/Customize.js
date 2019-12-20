import React from 'react';
import Feature from '../Feature/Feature'

function Customize(props) {
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    
    return (
    <Feature key={featureHash} 
    selected={props.selected} 
    updateFeature={props.updateFeature}
    feature={feature} 
    options={props.features[feature]}
    featureHash={featureHash} />);
  });
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  )
}

export default Customize;
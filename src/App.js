import React, { Component } from 'react';
import './App.css';
import Customize from './Customize/Customize';
import Cart from './Cart/Cart';

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  updateFeature = (feature, newValue) => {
    let cost;
    for (let option of this.props.features[feature]) {
      if(option.name === newValue) {
        cost = option.cost;
      }
    }
    newValue = {
      name: newValue,
      cost: cost
    };
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <Customize selected={this.state.selected} 
          features={this.props.features} 
          updateFeature={this.updateFeature}/>
          <Cart selected={this.state.selected}/>
        </main>
      </div>
    );
  }
}

export default App;

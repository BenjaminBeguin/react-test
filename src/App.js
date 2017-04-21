import React, { Component } from 'react';
import store from './store/store';

//components
import Header from './components/header/index';
import AddToCard from './components/addToCard/addToCard';

// style
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        { store.getState().products.map((product) =>
            <AddToCard action="ADD_TO_CART" id={product.id} key={product.id} name={product.name} quantity={product.quantity} ></AddToCard>
        )}
      </div>
    );
  }
}

export default App;

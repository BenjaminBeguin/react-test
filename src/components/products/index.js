import React from 'react';
import {connect} from 'react-redux';
import AddToCard from '../addToCard/addToCard';

class Products extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.cart.productList.map((product, index) =>
            <AddToCard
              action="ADD_TO_CART"
              id={product.id}
              key={index} name={product.name} quantity={product.quantity} />
          )
        }
      </div>
    );
  }
}

export default connect(store => ({cart: store.cart}))(Products);

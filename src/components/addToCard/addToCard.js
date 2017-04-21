import React from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../../actions';

class AddToCard extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.props.dispatch(
      addToCart(
        this.props.cart.productList,
        this.props.id
      )
    )
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <button onClick={this.handleClick}> Addto cart : {this.props.quantity}</button>
      </div>
    );
  }
}

export default connect(store => ({cart: store.cart}))(AddToCard);

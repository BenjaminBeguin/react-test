import React from 'react';
import store from '../../store/store';


class AddToCard extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <button onClick={() => store.dispatch({type: 'ADD_TO_CART' , index:this.props.id}) }> Addto cart : {this.props.quantity}</button>
      </div>
    );
  }
}

export default AddToCard;

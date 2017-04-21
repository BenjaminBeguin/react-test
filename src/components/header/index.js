import React from 'react';
import store from '../../store/store';

class Header extends React.Component {
  render() {
    return (
      <div>
        Total :
        {store.getState().products.reduce((p1, p2) => {
          return p1.quantity + p2.quantity
        })}
      </div>
    );
  }
}

export default Header;

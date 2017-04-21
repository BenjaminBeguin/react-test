import * as types from '../actions/actionTypes';

const CartUnitialState = {
  productList: [
    {
      id: 0,
      name:'product 1',
      quantity: 0,
    },
    {
      id: 1,
      name: 'product 2',
      quantity: 45
    }
  ]
}


export default function cartReducer(state = CartUnitialState, action){
  switch(action.type) {
		case types.ADD_TO_CART: {
      return {
        ...state,
        cart: action.payload.products
      }
    }

		default: {
      return state;
    }
	}
}

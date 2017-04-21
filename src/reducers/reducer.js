import { combineReducers } from 'redux';
import * as types from '../actions/actionTypes';

const ProductUnitialState = [{
  id: 0,
  name:'product 1',
  quantity: 0,
},
{
  id: 1,
  name: 'product 2',
  quantity: 45
}]

function productsReducer(state = ProductUnitialState, action){
  switch(action.type) {
		case types.ADD_TO_CARST:
      state[action.index].quantity += 1
		  return state
		default:
			return state;
	}
}

const reducer = combineReducers({
	products: productsReducer
});

export default reducer;

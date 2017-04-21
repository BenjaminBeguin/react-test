import { combineReducers } from 'redux';
import cartReducer from './CartReducer';
import musicReducer from './SpotifyReducer';

const reducer = combineReducers({
	cart: cartReducer,
  spotify: musicReducer
});

export default reducer;

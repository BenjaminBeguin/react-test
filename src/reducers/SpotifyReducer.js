import * as types from '../actions/actionTypes';

const MusicUnitialState = {
  albums: []
}


export default function musicReducer(state = MusicUnitialState, action){
  switch(action.type) {
		case types.FETCH_ALBUMS_FULFILLED: {
      return {
        ...state,
        albums: action.payload.albums
      }
    }
		default: {
      return state;
    }
	}
}

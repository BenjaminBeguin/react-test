import * as types from './actionTypes';
import axios from 'axios';

export function addToCart(products, index) {
  const newProducts = products
  newProducts[index].quantity += 1;
  return {
    type: types.ADD_TO_CART,
    payload: {
      products: newProducts
    }
  }
}

export function fetchArtists() {
  return dispatch => {
    axios.get('https://api.spotify.com/v1/artists/3sFn8HRnBP6g4twNNy9Tzz/albums', {
      params: {
        client_id: '62d33ddf06534be294ae08c20311b971',
        client_secret: '726923b286cb4b17af0656c5d7f17c59'
      }
    })
    .then(function (response) {
      console.log(response);
      if (response.data && response.data.items) {
        const albums = response.data.items
        dispatch({
          type: types.FETCH_ALBUMS_FULFILLED,
          payload: {
            albums
          }
        })
      }
    })
    .catch(function (error) {
      console.warn(error);
    });
  }
}

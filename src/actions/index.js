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

function fetchAlbumData(albums, index , id) {
  return dispatch => {
    axios.get('https://api.spotify.com/v1/albums/' + id, {
      params: {
        client_id: '62d33ddf06534be294ae08c20311b971',
        client_secret: '726923b286cb4b17af0656c5d7f17c59'
      }
    })
    .then(function (response) {
      if (response.data && response.data) {
        const albumData = {
          release_date: response.data.release_date,
          popularity : response.data.popularity,
          tracks: response.data.tracks.items.map(
            track => {
              return {
                name: track.name,
                preview: track.preview_url
              }
            }
          )
        }
        albums[index].data = albumData
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

export function fetchAlbums() {
  return dispatch => {
    axios.get('https://api.spotify.com/v1/artists/3sFn8HRnBP6g4twNNy9Tzz/albums', {
      params: {
        client_id: '62d33ddf06534be294ae08c20311b971',
        client_secret: '726923b286cb4b17af0656c5d7f17c59'
      }
    })
    .then(function (response) {
      if (response.data && response.data.items) {
        const albums = response.data.items.map(
          item => {
            return {
              id: item.id,
              name: item.name,
              artist: item.artist,
              data : []
            }
          }
        )
        dispatch({
          type: types.FETCH_ALBUMS_FULFILLED,
          payload: {
            albums
          }
        })
        albums.map(function(album, index) {
          dispatch(fetchAlbumData(albums, index , album.id))
        })
      }
    })
    .catch(function (error) {
      console.warn(error);
    });
  }
}

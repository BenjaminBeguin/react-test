import { createStore } from 'redux'
import React from 'react';
import ReactDOM from 'react-dom';

import reducer from '../reducers/reducer'
import App from '../App';

const store = createStore(
  reducer
)

function render() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

store.subscribe(() => render())

export default store

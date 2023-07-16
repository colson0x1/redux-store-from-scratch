import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { store } from './store/store';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<App state={store.getState()} dispatch={store.dispatch} />);

const render = () => {
  document.getElementById('count').text = store.getState();
};
render();

store.subscribe(render);

document.getElementById('plusButton').addEventListener('click', () => {
  store.dispatch({
    type: 'increment',
  });
});

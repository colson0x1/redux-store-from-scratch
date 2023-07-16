import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store/store';

const container = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <App state={store.getState()} dispatch={store.dispatch} />,
    container
  );
};

store.subscribe(render); // Re-render on state changes.

render(); // Initial render.
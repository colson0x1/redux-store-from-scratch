const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = () => {};

  const subscribe = (listener) => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  return { getState, dispatch, subscribe };
};

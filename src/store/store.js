const createStore = (reducer) => {
  let state;

  const getState = () => state;
  const dispatch = () => {};
  const subscribe = () => {};

  return { getState, dispatch, subscribe };
};

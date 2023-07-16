function App({ state, dispatch }) {
  const handleIncrement = () => {
    dispatch({ type: 'increment' });
  };

  return (
    <div>
      <h1>Redux Store from Scratch</h1>
      <p>Count: {state}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default App;

import { useState } from "react";

const INITIAL_COUNT = 0;

const Counter = () => {
  const [count, setCount] = useState(INITIAL_COUNT);

  const handleIncrement = () => setCount((c) => c + 1);
  const handleDecrement = () => setCount((c) => c - 1);
  const handleReset = () => setCount(INITIAL_COUNT);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;

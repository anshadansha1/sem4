import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(1);
  const [showButtons, setShowButtons] = useState(false);

  const handleShowButtons = () => {
    setShowButtons(true);
  };

  const handleHideButtons = () => {
    setShowButtons(false);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(1);
  };

  return (
    <div className="App">
      <h2>Counter Page</h2>
      {!showButtons && (
        <button onClick={handleShowButtons}>Show Count</button>
      )}
      {showButtons && (
        <div>
          <h3>Count: {count}</h3>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleHideButtons}>Hide Buttons</button> {/* New button to hide the buttons */}
        </div>
      )}
    </div>
  );
}

export default Counter;
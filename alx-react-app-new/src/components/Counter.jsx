// Import the useState hook from React
import { useState } from 'react';

// Define the Counter component
function Counter() {
  // Initialize the count state with 0
  const [count, setCount] = useState(0);

  // JSX structure for the Counter component
  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;

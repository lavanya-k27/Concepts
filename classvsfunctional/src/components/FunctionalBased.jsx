const FunctionalBased = () => {
  const code = `import { useState } from "react";

function Welcome() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Welcome;`;

  return (
    <pre>
      <code>{code}</code>
    </pre>
  );
};

export default FunctionalBased;

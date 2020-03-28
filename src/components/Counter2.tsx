import React from "react";

function Counter() {
  const [counter, setCounter] = React.useState(0);

  function increaseCounter() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <p>Counter from Counter2 component</p>
      <p>
        Counter:
        {counter}
      </p>
      <button type="button" onClick={increaseCounter}>
        Increase++
      </button>
    </div>
  );
}

export default Counter;

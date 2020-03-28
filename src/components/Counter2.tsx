import React from "react";

function Counter() {
  const [counter, setCounter] = React.useState(0);

  function increaseCounter() {
    setCounter(counter + 1);
  }

  function decreaseCounter() {
    setCounter(counter - 1);
  }

  function multiplyTwiceCounter() {
    setCounter(counter * 2);
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
      <button type="button" onClick={decreaseCounter}>
        Decrease--
      </button>
      <button type="button" onClick={multiplyTwiceCounter}>
        Duplicate
      </button>
    </div>
  );
}

export default Counter;

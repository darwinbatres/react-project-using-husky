import React from "react";

const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  function increaseCounter() {
    setCounter(counter + 1);
  }

  function decreaseCounter() {
    setCounter(counter - 1);
  }

  const values = [
    "1",
    2,
    "4",
    "5",
    "something else",
    "1",
    2,
    "4",
    "5",
    "something else",
    "1",
    2,
    "4",
    "5",
    "something else",
  ];

  return (
    <div>
      <p>Hello from Counter component</p>
      <p>Counter: {counter}</p>
      <button type="button" onClick={increaseCounter}>
        Increase ++
      </button>
      <button type="button" onClick={decreaseCounter}>
        Decrease --
      </button>
    </div>
  );
};

export default Counter;

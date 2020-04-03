import React from "react";

const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  function increaseCounter() {
    setCounter(counter + 1);
  }

  function decreaseCounter() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <p>Hello from Counter component</p>
      <p>Hello from Counter component</p>
      <p>
        Counter:
        {counter}
      </p>
      <button type="button" onClick={increaseCounter}>
        Increase ++++
      </button>
      <button type="button" onClick={decreaseCounter}>
        Decrease --
      </button>
    </div>
  );
};

export default Counter;

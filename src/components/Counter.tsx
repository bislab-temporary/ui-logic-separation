import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount(prevState => prevState + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={incrementCount}>+1</button>
    </>
  )
};

export default Counter;

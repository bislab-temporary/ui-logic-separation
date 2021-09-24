import React, { VFC } from 'react';

export type Props = {
  count: number;
  incrementCount: () => void;
};

const CounterView: VFC<Props> = ({ count, incrementCount }) => {
  return (
    <>
      <h1>{count}</h1>
      <button onClick={incrementCount}>+1</button>
    </>
  );
};

export default CounterView;

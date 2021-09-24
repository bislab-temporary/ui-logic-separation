import React, { VFC } from 'react';

import { useCounter } from './Counter.hook';
import CounterView from './Counter.view';

const Counter: VFC = () => {
  const { count, incrementCount } = useCounter();

  return <CounterView count={count} incrementCount={incrementCount} />;
};

export default Counter;

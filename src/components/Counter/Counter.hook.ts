import { useState } from 'react';
import type { Props as ViewProps } from './Counter.view';

export const useCounter = (): ViewProps => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount(prevState => prevState + 1);
  };

  return { count, incrementCount };
};

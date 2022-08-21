import { useState } from 'react';
import CounterButton from './CounterButton';

const Counter = () => {
  const [count, setCount] = useState(0);
  const numbers = [1, 2, 5, 10];

  const ChangeCounter = (num) => {
    setCount((prevCount) => prevCount + num);
  };

  return (
    <div>
      <h3> Count: {count}</h3>
      <div id="Add">
        {numbers.map((number) => {
          return (
            <CounterButton
              num={number}
              click={() => ChangeCounter(number)}
              key={number}
            />
          );
        })}
      </div>
      <div id="Sub">
        {numbers.map((number) => {
          number = -number;
          return (
            <CounterButton
              num={number}
              click={() => ChangeCounter(number)}
              key={number}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Counter;

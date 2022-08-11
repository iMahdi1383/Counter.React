import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const AddCounter = (num) => {
    for (let i = 0; i < num; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  const SubCounter = (num) => {
    for (let i = 0; i > num; i--) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div>
      <h3> Count: {count}</h3>
      <div id="Add">
        <button
          onClick={() => {
            AddCounter(1);
          }}
        >
          {'+1'}
        </button>
        <button
          onClick={() => {
            AddCounter(2);
          }}
        >
          {'+2'}
        </button>
        <button
          onClick={() => {
            AddCounter(5);
          }}
        >
          {'+5'}
        </button>
        <button
          onClick={() => {
            AddCounter(10);
          }}
        >
          {'+10'}
        </button>
      </div>
      <br />
      <div id="Sub">
        <button
          onClick={() => {
            SubCounter(-1);
          }}
        >
          {'-1'}
        </button>
        <button
          onClick={() => {
            SubCounter(-2);
          }}
        >
          {'-2'}
        </button>
        <button
          onClick={() => {
            SubCounter(-5);
          }}
        >
          {'-5'}
        </button>
        <button
          onClick={() => {
            SubCounter(-10);
          }}
        >
          {'-10'}
        </button>
      </div>
      <br />
    </div>
  );
};

export default Counter;

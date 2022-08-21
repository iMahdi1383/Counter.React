import { Component } from 'react';
import CounterButton from './CounterButton';

class Counter extends Component {
  state = {
    count: 0,
  };
  numbers = [1, 2, 5, 10, 50, 100];

  ChangeCounter = (num) => {
    this.setState((prevState) => (prevState.count += num));
  };

  render() {
    return (
      <div>
        <h3> Count: {this.state.count}</h3>
        <div id="Add">
          {this.numbers.map((number) => {
            return (
              <CounterButton
                num={number}
                click={() => this.ChangeCounter(number)}
                key={number}
              />
            );
          })}
        </div>
        <div id="Sub">
          {this.numbers.map((number) => {
            number = -number;
            return (
              <CounterButton
                num={number}
                click={() => this.ChangeCounter(number)}
                key={number}
              />
            );
          })}
        </div>
        <br />
      </div>
    );
  }
}

export default Counter;

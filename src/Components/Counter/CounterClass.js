import { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };
  AddCounter = (num) => {
    for (let i = 0; i < num; i++) {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    }
  };
  SubCounter = (num) => {
    for (let i = 0; i > num; i--) {
      this.setState((prevState) => {
        return { count: prevState.count - 1 };
      });
    }
  };
  render() {
    return (
      <div>
        <h3> Count: {this.state.count}</h3>
        <div id="Add">
        <button
          onClick={() => {
            this.AddCounter(1);
          }}
        >
          {'+1'}
        </button>
        <button
          onClick={() => {
            this.AddCounter(2);
          }}
        >
          {'+2'}
        </button>
        <button
          onClick={() => {
            this.AddCounter(5);
          }}
        >
          {'+5'}
        </button>
        <button
          onClick={() => {
            this.AddCounter(10);
          }}
        >
          {'+10'}
        </button>
      </div>
      <br />
      <div id="Sub">
        <button
          onClick={() => {
            this.SubCounter(-1);
          }}
        >
          {'-1'}
        </button>
        <button
          onClick={() => {
            this.SubCounter(-2);
          }}
        >
          {'-2'}
        </button>
        <button
          onClick={() => {
            this.SubCounter(-5);
          }}
        >
          {'-5'}
        </button>
        <button
          onClick={() => {
            this.SubCounter(-10);
          }}
        >
          {'-10'}
        </button>
      </div>
      <br />
      </div>
    );
  }
}

export default Counter;

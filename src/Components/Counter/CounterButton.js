const CounterButton = (props) => {
  const number = props.num > 0 ? '+' + props.num : props.num; // Add '+' to odd numbers
  return <button onClick={props.click}>{number}</button>;
};

export default CounterButton;

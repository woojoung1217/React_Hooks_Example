import React from "react";

// usestate =>count
// usestate => {count : 0}
export default function Example3() {
  const [state, setState] = React.useState({ count: 0 });
  return (
    <div>
      <p>you clicked {state.count} times </p>
      <button onClick={click}>Click me!</button>
    </div>
  );

  function click() {
    setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  }
}

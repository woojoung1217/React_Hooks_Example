import React from "react";

export default function Example5() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("컴포넌트 디드 마운트");
  }, []);

  React.useEffect(() => {
    console.log("컴포넌트 디드 마운트 & 디드 업데이트  by count ", count);
  }, [count]);
  return (
    <div>
      <p>you clicked {count} times </p>
      <button onClick={click}>Click me!</button>
    </div>
  );

  function click() {
    setCount(count + 1);
  }
}

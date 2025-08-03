import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

const App = () => {
  const [count, setCount] = useState(0);

  const sayHello = () => {
    console.log("Hello! This is a static message.");
  };

  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayWelcome = (msg) => {
    alert("Welcome message: " + msg);
  };

  const handleClick = (e) => {
    alert("I was clicked");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Event Handling Example</h1>
      <p>Counter Value: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br /><br />
      <button onClick={() => sayWelcome("Welcome!")}>Say Welcome</button>
      <br /><br />
      <button onClick={handleClick}>Synthetic Event (OnPress)</button>
      <br /><br />
      <CurrencyConvertor />
    </div>
  );
};

export default App;
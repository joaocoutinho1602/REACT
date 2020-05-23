import React, { useState, Fragment } from "react";
import useDocumentTitle from "./useDocumentTitle";

function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useDocumentTitle(`${name} clicked ${count} times`);

  return (
    <Fragment>
      <input type="text" onChange={e => setName(e.target.value)}></input>
      <div>
        {name} has clicked the button {count} times
      </div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </Fragment>
  );
}

export default Counter;

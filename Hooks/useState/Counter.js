import React, { useState } from "react";

function Counter() {
  //let hits = 0;
  const [count, setcount] = useState(0);
  const onHandleClick = () => {
    // hits are incremented but the page not rendered
    //hits = ++hits;
    setcount(count + 1);
    //console.log("hits = " + hits);
  };
  return (
    <div className="container">
      <p>{count}</p>
      <button onClick={onHandleClick}>+</button>
    </div>
  );
}

export default Counter;

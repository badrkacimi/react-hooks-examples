import React, { useContext } from "react";
import context from "./InputContext";

function Form() {
  const {setinputName} = useContext(context);

  return (
    <div>
      <input
        onChange={(event) => {
          setinputName(event.target.value);
        }}
      />
    </div>
  );
}

export default Form;

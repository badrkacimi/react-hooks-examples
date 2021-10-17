import React, { useContext } from "react";
import { context } from "./InputContext";

function ShowName() {
  const {inputName} = useContext(context);

  return <div>User : {inputName} !</div>;
}

export default ShowName;

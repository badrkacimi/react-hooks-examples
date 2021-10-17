import { useState, createContext } from "react";
import Form from "./Form";
import ShowName from "./ShowName";

export const context = createContext();

function InputContext() {
  const [inputName, setinputName] = useState("");

  return (
    <context.Provider value={{ inputName, setinputName }}>
      <Form />
      <ShowName />

    </context.Provider>
  );
}

export default InputContext;

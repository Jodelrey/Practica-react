import React, { useState, useEffect, useRef } from "react";

const Stock = ({ value }) => {
  const valueRef = useRef(value);
  const divRef = useRef(null);
  const [aumento, setAumento] = useState("");

  useEffect(() => {
    console.log(valueRef);
    console.log(value);
    if (valueRef.current > value) {
      console.log("Valor bajo");
      setAumento("");
      divRef.current.style.color = "red";
    } else {
      console.log("Valor aumento");
      divRef.current.style.color = "blue";
      if (value / valueRef.current <= 1.25) {
        setAumento("+");
      } else if (value / valueRef.current <= 1.5) {
        setAumento("++");
      } else if (value / valueRef.current <= 2) {
        setAumento("+++");
      }
    }
    valueRef.current = value;
  }, [value]);

  return (
    <div ref={divRef}>
      {value}
      {aumento}
    </div>
  );
};

export default Stock;

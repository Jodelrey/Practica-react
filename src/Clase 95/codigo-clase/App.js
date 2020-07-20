import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const valueRef = useRef(0);
  const inputRef = useRef(null);
  const [rerender, setRerender] = useState(false);
  const [temperatura, setTemperatura] = useState(0);
  const temperaturaRef = useRef(temperatura);

  const handleClick = () => {
    valueRef.current += 1;
  };
  const handleFocus = () => {
    inputRef.current.focus();
    //inputRef.current.style.border="10px solid red"
  };
  useEffect(() => {
    console.log(`Valor actual: ${temperatura}`);
    console.log(`Valor previo: ${temperaturaRef.current}`);
    if (temperaturaRef.current < temperatura) {
      console.log("Temperatura subio");
    } else {
      console.log("Temperatura bajo");
    }
    temperaturaRef.current = temperatura;
  }, [temperatura]);

  return (
    <div>
      <button onClick={handleClick}>SumarRef</button>
      <button onClick={() => setRerender(!rerender)}>Rerenderizar</button>
      <button onClick={handleFocus}>Hacer Foco</button>
      <input type="text" ref={inputRef} />
      <button onClick={() => setTemperatura(temperatura + 5)}>+5 grados</button>
      <button onClick={() => setTemperatura(temperatura - 5)}>-5 grados</button>
      <h2>Temperatura {temperatura}</h2>
    </div>
  );
};

export default App;

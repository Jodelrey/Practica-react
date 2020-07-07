import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInverval(() => {
      setTime(time + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return <h1>{time}</h1>;
};

const App = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => setVisible(!visible);
  return (
    <div>
      <button onClick={handleClick}>Mostrar</button>
      {visible && <Timer />}
    </div>
  );
};

export default App;

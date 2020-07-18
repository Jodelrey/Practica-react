import React, { useState } from "react";
import Stock from "./Stock";

const App = () => {
  const [value, setValue] = useState(0);
  const handleKeyPress = (event) => {
    if (event.charCode === 13) {
      setValue(Number(event.target.value));
    }
  };
  return (
    <div>
      <input type="number" onKeyPress={handleKeyPress} />
      <Stock value={value} />
    </div>
  );
};

export default App;

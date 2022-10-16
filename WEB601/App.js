import React, { useState } from "react";
import React from "react";
const App = () => {
   const [tempratureValue, setTempratureValue] = useState(10);
  return (
    <div className="app-container">
      <div className="emperature-display-container">
        <div className='temperature-display'>10°C</div>
        <div className="button-container">
          <button <button onClick={() => setTempratureValue(tempratureValue + 1)}>
          >+</button>
          <button onClick={() => setTempratureValue(tempratureValue - 1)}>-</button>
        </div>
      </div>
    </div>
  );
};
export default App;

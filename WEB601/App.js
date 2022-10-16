import React, { useState } from "react";
import React from "react";
const App = () => {
  const [tempratureValue, setTempratureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");
  const increaseTemperature = () => {
    setTempratureValue(tempratureValue + 1);
    setTempratureValue(newTemperature);
    if (newTemperature >= 15) {
      setTemperatureColor("hot");
    }
  };
  const decreaseTemperature = () => {
    setTemperatureValue(tempratureValue - 1);
    setTemperatureValue(newTemperature);
    if (newTemperature < 15) {
      setTemperatureColor("cold");
    }
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {tempratureValue}°C
        </div>
      </div>
      <div className="temperature-display">{tempratureValue}°C</div>
      <div className="button-container">
        <button></button>
        <button onClick={() => setTempratureValue(tempratureValue + 1)}>
          +
        </button>
        <button onClick={() => setTempratureValue(tempratureValue - 1)}>
          -
        </button>
      </div>
    </div>
  );
};
export default App;

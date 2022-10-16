import React from "react";
const App = () => {
  return (
    <div className="app-container">
      <div className="emperature-display-container">
        <div className="temperature-display">10°C</div>
        <div className="button-container">
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    </div>
  );
};
export default App;

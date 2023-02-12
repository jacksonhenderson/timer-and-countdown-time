import React, { Component } from "react";

import Stopwatch from "./components/Stopwatch";
import Countdown from "./components/Countdown";

const App = () => {

  return (
    <div className="App">
      <div className="App-title">Timers Demo</div>
      <div className="Timers">
        <Stopwatch />
        <Countdown />
      </div>
    </div>
  );
};

export default App;

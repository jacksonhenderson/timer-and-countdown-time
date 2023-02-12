// import React, { Component, useState } from "react";
// import "../App.css";

// const Stopwatch = () => {

//   const [startTimer, setStartTimer] = useState({
//     timerOn: false,
//     timerStart: 0,
//     timerTime: 0
//   });
//   // state = {
//   //   timerOn: false,
//   //   timerStart: 0,
//   //   timerTime: 0
//   // };

//   const startTimerHandle = () => {
//     setStartTimer({
//       ...startTimer,
//       timerOn: true,
//       timerTime: startTimer.timerTime,
//       timerStart: Date.now() - startTimer.timerTime
//     });

//     const timer = setInterval(() => {
//       setStartTimer({
//         timerTime: Date.now() - startTimer.timerStart
//       });
//     }, 10);
//   };

//   const stopTimerHandle = () => {
//     setStartTimer({ ...startTimer, timerOn: false });
//     // clearInterval(timer);
//   };

//   const resetTimerHandle = () => {
//     setStartTimer({
//       ...startTimer,
//       timerStart: 0,
//       timerTime: 0
//     });
//   };

//     // const timerTime = 0;
//     let centiseconds = ("0" + (Math.floor(startTimer.timerTime / 10) % 100)).slice(-2);
//     let seconds = ("0" + (Math.floor(startTimer.timerTime / 1000) % 60)).slice(-2);
//     let minutes = ("0" + (Math.floor(startTimer.timerTime / 60000) % 60)).slice(-2);
//     let hours = ("0" + Math.floor(startTimer.timerTime / 3600000)).slice(-2);
//     return (
//       <div className="Stopwatch">
//         <div className="Stopwatch-header">Stopwatch</div>
//         <div className="Stopwatch-display">
//           {hours} : {minutes} : {seconds} : {centiseconds}
//         </div>
//         {!startTimer.timerOn && startTimer.timerTime === 0 && (
//           <button onClick={startTimerHandle}>Start</button>
//         )}
//         {startTimer.timerOn && (
//           <button onClick={stopTimerHandle}>Stop</button>
//         )}
//         {!startTimer.timerOn && startTimer.timerTime > 0 && (
//           <button onClick={startTimerHandle}>Resume</button>
//         )}
//         {!startTimer.timerOn && startTimer.timerTime > 0 && (
//           <button onClick={resetTimerHandle}>Reset</button>
//         )}
//       </div>
//     );
//   };

// export default Stopwatch;
//////////////////////////////////////////////
// import React, { Component } from "react";
// import "../App.css";

// const StopWatch = () => {
//   const [timerOn, setTimerOn] = (false);
//   const [timerStart, setTimerStart] = (0);
//   const [timerTime, setTimerTime] = (0);

// const timer = setInterval(() => {
//   setTimerTime(Date.new() - timerStart)
// }, 10);

//   const startTimer = () => {
//     setTimerOn(true);
//     setTimerStart(Date.now() - timerTime);
//     setTimerTime(timerTime);
//   };

//   const stopTimer = () => {
//     setTimerOn(false);
//     clearInterval(timer)
//   };

//   const resetTimer = () => {
//     setTimerStart(0);
//     setTimerTime(0)
//   };

//   let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
//   let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
//   let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
//   let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

//   return (
//     <div className="StopWatch">
//       <div className="Stopwatch-header">StopWatch</div>
//       <div className="Stopwatch-display">
//         {hours} : {minutes} : {seconds} : {centiseconds}
//       </div>
//       {timerOn === false && timerTime === 0(<button onClick={startTimer}>Start</button>)}
//       {timerOn === true && (<button onClick={stopTimer}>Stop</button>)}
//       {timerOn === false && timerTime > 0(<button onClick={startTimer}>Resume</button>)}
//       {timerOn === false && timerTime > 0(<button onClick={resetTimer}>Reset</button>)}
//     </div>
//   );
// };

// export default StopWatch;
///////////////////////////////////////////////
import React, { Component } from "react";
import "../App.css";

class Stopwatch extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: new Date().getTime() - this.state.timerTime
    });

    this.timer = setInterval(() => {
      this.setState({
        timerTime: new Date().getTime() - this.state.timerStart
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      timerOn: false,
      timerStart: 0,
      timerTime: 0
    });
  };

  render() {
    const { timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <div className="Stopwatch">
        <div className="Stopwatch-header">Stopwatch</div>
        <div className="Stopwatch-display">
          {hours} : {minutes} : {seconds} : {centiseconds}
        </div>
        {!this.state.timerOn && this.state.timerTime === 0 && (
          <button onClick={this.startTimer}>Start</button>
        )}
        {this.state.timerOn && (
          <button onClick={this.stopTimer}>Stop</button>
        )}
        {!this.state.timerOn && this.state.timerTime > 0 && (
          <button onClick={this.startTimer}>Resume</button>
        )}
        {!this.state.timerOn && this.state.timerTime > 0 && (
          <button onClick={this.resetTimer}>Reset</button>
        )}
      </div>
    );
  }
}

export default Stopwatch;

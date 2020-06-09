import React from "react";
import ReactDOM from "react-dom";
import Timer from "react-compound-timer";
import "./styles.css";

class TimerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.timerStartButton = React.createRef();
    this.timerStopButton = React.createRef();
  }
  startTimer(start) {
    start();
  }
  stopTimer(stop) {
    stop();
  }
  componentDidUpdate(prevProps) {
    // the only way for inner buttons is by using refs
    if (prevProps.start === false && this.props.start === true) {
      this.timerStartButton.current.click();
    }
    if (prevProps.stop === false && this.props.stop === true) {
      this.timerStopButton.current.click();
    }
  }
  render() {
    return (
      <Timer
        formatValue={value => `${value < 10 ? `0${value}` : value}`}
        startImmediately={false}
        onStart={() => console.log("on start hook")}
        onStop={() => console.log("on stop hook")}
      >
        {({ start, resume, pause, stop, reset, timerState }) => (
          <React.Fragment>
            <div>
              <Timer.Days />:
              <Timer.Hours />:
              <Timer.Minutes />:
              <Timer.Seconds />
            </div>
            <br />
            <div>
              <button
                hidden
                ref={this.timerStartButton}
                onClick={() => this.startTimer(start)}
              >
                Start
              </button>
              {/* <button onClick={pause}>Pause</button> */}
              {/* <button onClick={resume}>Resume</button> */}
              <button
                hidden
                ref={this.timerStopButton}
                onClick={() => this.stopTimer(stop)}
              >
                Stop
              </button>
              {/* <button onClick={reset}>Reset</button> */}
            </div>
          </React.Fragment>
        )}
      </Timer>
    );
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      stop: false
    };
  }
  startClick(e) {
    this.setState({ start: true, stop: false });
  }
  handleHover(e) {
    e.stopPropagation();
    if (e.ctrlKey) {
      console.log("hover + ctrl done!", ["hover"].join("/"));
    }
  }
  render() {
    const { start, stop } = this.state;
    return (
      <div>
        <TimerComponent start={start} stop={stop} />
        <button
          onClick={e => this.startClick(e)}
          onMouseOver={e => this.handleHover(e)}
        >
          start
        </button>
        <button
          onClick={() => {
            this.setState({ start: false, stop: true });
          }}
        >
          stop
        </button>
      </div>
    );
  }
}

export default Timer;

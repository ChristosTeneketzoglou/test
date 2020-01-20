import React from "react";
import "./Timer.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <div className="container">
        <div className="child">
          <h1>Hello,world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      </div>
    );
  }
}

export default Timer;

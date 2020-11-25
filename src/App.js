import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      end: new Date("2020/12/1 00:00"),
      time: new Date()
    }
  }


  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let seconds = parseInt((this.state.end-this.state.time)/1000);
    console.log(seconds)
    let text
    if (seconds < 0) {
      text = "Barber deg for faen!"
    } else {
      text = seconds.toString()
    }
    return (
      <div className="App">
        <h5 className="App-intro">
          {text}
        </h5>
      </div>
    );
  }
}

export default App;

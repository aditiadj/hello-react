import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'January 1, 2019'
    }
  }

  changeDeadline() {
    this.setState({deadline: 'December 1, 2018'})
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown {this.state.deadline}</div>
        <div>
          <div className="Clock-days">14 days</div>
          <div className="Clock-hours">20 hours</div>
          <div className="Clock-minutes">10 minutes</div>
          <div className="Clock-seconds">5 seconds</div>
        </div>
        <div>
          <input placeholder='new date'/>
          <button onClick={() => this.changeDeadline()}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default App;
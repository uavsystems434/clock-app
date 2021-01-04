import React, { Component } from 'react';
import "./clock.css";
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString()
        }
    }
    componentDidMount() {
        this.intervalID = setInterval(() => this.updateClock(), 1000);

    }
    componentWillUnmount(){
        clearInterval(this.intervalID);
    }

    //This is the function to update the state of the current time to a new time

    updateClock () {
        this.setState({
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString('en-US', options)
        });
    }

    render() {
        return (
        <div className="Time">Current Date and Time
            <p className="time-container">{this.state.time}
            </p>
            <p className="Date">{this.state.date}</p>
        </div>
        );}
}
    export default Clock;






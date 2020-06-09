import React from 'react';
import { Link } from 'react-router-dom';




 class Timerset extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        minutes: this.props.minutes,
        seconds: this.props.seconds
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    handleStopClick = () => {
        console.log("Click");
        alert("Click OK to resume the test");
    }

    render() {
        const { minutes, seconds } = this.state
        return (
            <div>
                { minutes === 0 && seconds === 0
                    ? <h1>Time is Over, Please Submit the paper</h1>
                    : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
                <button onClick={() => {this.handleStopClick({minutes},{seconds})}}>STOP THE TIMER</button><br/>
            </div>
        )
    }
}
export default Timerset;
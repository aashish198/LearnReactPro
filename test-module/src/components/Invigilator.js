import React from 'react';
import Timerset from '.././invigilatorsComponents/Timerset';
import Candidate from '../components/Candidate';
import { BrowserRouter,Route, Link } from 'react-router-dom';
import Timer from "react-compound-timer";

class Invigilator extends React.Component{ 

    state = {
            minutes:'2',
            seconds: '10'};

    constructor(props){
        super(props);
        //    this.click=this.handleClick.bind(this);
        // this.minutes=this.minutes.bind(this);
        // this.seconds=this.seconds.bind(this);
    }
    
      handleClick = () => {
        console.log("Clicked");
        // e.preventDefault();
        // alert({minutes});
        const time ={
            minutes: '2',
            seconds : '10'
        };  
    }
    render(){    
        return (
            <BrowserRouter>
            <div className= "ui container" style={{ marginTop: '10px'}}>
                    This is invigilators page<br/>
                    <Route path="/Timerset" >
                        <Timerset minutes={this.state.minutes} seconds={this.state.seconds} /> 
                    </Route>
                        <Link to='/Timerset' >
                        <button onClick={this.handleClick}>START THE TIMER</button><br/>
                        </Link>
                        </div>
                        {/* <Candidate /> */}
                        </BrowserRouter>
                        )
}
}
export default Invigilator;
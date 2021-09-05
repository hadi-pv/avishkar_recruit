import React from 'react';
import './App.css';
import img from './images/image3.png';

const Content=()=>{
    return(
        <React.Fragment>
            <center className="content">
                <h1 className="congrats">!CONGRATULATIONS!</h1>
                <h2 className="content-text">We Have Recieved Your Request</h2>
                <img alt="yayy" src={img} className="img-fluid image2"/>
            </center>
        </React.Fragment>
    )
}

export default Content;


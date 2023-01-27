import React from "react";
import './Slider.css';
import Imgfoto from "./slider.jpg";
class Slider extends React.Component{
    render(){
        return (
            <div className="Slider">
                <input type='radio' name='radio-btn'></input>


                <div class='slider first'> 
                        <img src={Imgfoto}></img>
                </div>

            </div>
        )
    }
}

export default Slider;
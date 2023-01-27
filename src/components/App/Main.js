import React from "react";
import ReactDOM from 'react-dom/client';
import Header from '../Header/Header'
import Content from '../Content/Content'
import Slider from "../Slider/Slider";
import Bottom from "../bottom/bottom";

class Main extends React.Component {
    render(){
      return (
        <div>
          <Header />
          <Slider />
          <Content />
          <Bottom />
      </div>)
    }
  }
  
export default Main ;  
import React from "react";
import './Header.css'
import Menu from './menuimg.png'
class Header extends React.Component{
    render(){
        return (
            <div className="head">
                <h1>imeruli <span className="ezo">ezo</span> </h1>
                <img className='menu'src={Menu} alt="Navbar Toggle Icon"></img>
            </div>
        )
    }
}

export default Header;
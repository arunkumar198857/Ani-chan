import React from 'react';
import title_logo from '../layout/title_logo.svg';
import '../../App.css'


const Navbar = () => {
    return (
        <div>
            <nav className="navbar mb-5">
            <span className="navbar-brand mb-0 h1 mx-auto" style={{color:'white'}}>
                <img className="title-logo" src={title_logo} alt="" height="40" width="40"/>
                Ani-chan
            </span>
        </nav>
        </div>
    )
};

export default Navbar;

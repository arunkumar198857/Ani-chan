import React from 'react'
import '../../App.css'
import {Link} from 'react-router-dom';
import back2 from '../layout/back2.svg'

const Error = () => {
    return (
        <div>
            <h1 className="error text-center">ERROR 404: PAGE NOT FOUND</h1>
            <br/>
            <h1 className="error text-center"><Link to="/"><img src={back2} alt="" height="75" width="75" id="back-button"/></Link> Back to Ani-chan</h1>
        </div>
    )
}

export default Error;
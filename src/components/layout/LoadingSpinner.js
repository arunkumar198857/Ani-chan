import React from 'react'
import '../../App.css'
import loading_spinner from './loading_spinner.gif';

const LoadingSpinner = () => {
    return (
        <div className="error-push2">
            <img 
                src = {loading_spinner}
                alt = "Loading..."
                style ={{width:'100px', margin: '40px auto', display: 'block', background:'#E0F2F1', color:'#E0F2F1'}}
            />
        </div>
    )
}

export default LoadingSpinner;

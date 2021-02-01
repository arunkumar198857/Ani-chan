import React from 'react'
import '../../App'

const StaffTiles = ({staff}) => {   
    return (
        <div className="staff-details">
            <div className="card font-white">
                <div className="staff-details-img-container">
                    <img src={staff.image_url} alt="" height="100" width="75"/>
                </div>
                <p className="text-center">{staff.name} <br/> <strong>{staff.positions}</strong></p>
            </div>
        </div>
    )
}

export default StaffTiles;

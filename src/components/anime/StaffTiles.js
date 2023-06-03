import React from 'react'
import '../../App'

const StaffTiles = ({staff}) => {  
    return (
        <div className="staff-details">
            <div className="card font-white">
                <div className="staff-details-img-container">
                    <img src={staff.person.images.jpg.image_url} alt="" height="100" width="75"/>
                </div>
                <p className="text-center">{staff.person.name} <br/> <strong>{staff.positions?.[0]}</strong></p>
            </div>
        </div>
    )
}

export default StaffTiles;

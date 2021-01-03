import React from 'react'
import '../../App'

const StaffTiles = ({staff}) => {   
    return (
        <div className="">
            <div className="card bg-white">
                <img src={staff.image_url} alt="" height="100" width="75"/>
                <p className="text-center">{staff.name} "{staff.positions}"</p>
            </div>
        </div>
    )
}

export default StaffTiles;

import React from 'react'
import StaffTiles from './StaffTiles'
import '../../App.css'

const Staff = ({input}) => {
    return (
        <div>
            <h4 className="characters-heading">Staff</h4>
            <div className="details-characters-secondary card-body">
                <React.Fragment>
                {
                    input.map( item => (
                        <StaffTiles key={item.mal_id} staff={item} />
                    ))
                }
                </React.Fragment>
            </div>
        </div>  
    );
}

export default Staff;
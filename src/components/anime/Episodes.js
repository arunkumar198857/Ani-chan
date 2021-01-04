import React from 'react'
import Episode from './Episode'
import '../../App.css'

const Episodes = ({input}) => {
    return (
        <div className="episodes-container">
            {
                input.map(item => (
                    <Episode key={item.episode_id} episode={item} />
                ))
            }
        </div>
    )
}

export default Episodes;
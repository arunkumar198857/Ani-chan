import React from 'react'
import RecommendTile from './RecommendTile' 

const Recommendations = ({input}) => {
    return (
       <div className="recommend-container">
            {
                input.slice(0,12).map(item => (
                    <RecommendTile key={item.mal_id} anime={item} />
                ))
            }
        </div>
    )
}

export default Recommendations;
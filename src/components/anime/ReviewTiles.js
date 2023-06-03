import React from 'react'
import '../../App'

const ReviewTiles = ({review}) => {   
    return (
        <div className="review-container">
            <div className="card p-4">
                <p className="review-content text-left text-light">
                    <strong>Username: </strong>{review.user.username} <a href={review.user.url} className="text-light">(profile)</a>
                    <br/>
                    <strong>Episodes seen: </strong>{review.episodes_watched}
                    <br/>
                    <strong>Date: </strong>{review.date}
                    <br/>
                    <strong>Scores(out of 10): {review.score} </strong>
                    {review.review}   
                    <br/>
                </p>
            </div>
        </div>
    )
}

export default ReviewTiles;

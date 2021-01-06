import React from 'react'
import '../../App'

const ReviewTiles = ({review}) => {   
    return (
        <div className="review-container">
            <div className="card p-4">
                <p className="review-content text-left text-light">
                    <strong>Username: </strong>{review.reviewer.username} <a href={review.reviewer.url} className="text-light">(profile)</a>
                    <br/>
                    <strong>Episodes seen: </strong>{review.reviewer.episodes_seen}
                    <br/>
                    <strong>Date: </strong>{review.date}
                    <br/>
                    <strong>Scores(out of 10): </strong>
                    animation: {review.reviewer.scores.animation}
                    , character: {review.reviewer.scores.character}
                    , enjoyment: {review.reviewer.scores.enjoyment}
                    , overall: {review.reviewer.scores.overall}
                    , sound: {review.reviewer.scores.sound}
                    , story: {review.reviewer.scores.story}
                    <br/><br/>
                    {review.content}   
                    <br/>
                </p>
            </div>
        </div>
    )
}

export default ReviewTiles;

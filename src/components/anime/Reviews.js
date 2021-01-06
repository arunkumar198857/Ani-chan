import React from 'react'
import ReviewTiles from './ReviewTiles'
import '../../App.css'

const Reviews = ({input}) => {
    return (
        <div>
            <h4 className="reviews-heading text-light mt-5">Reviews</h4>
            <div className="review-container card-body">
                <React.Fragment>
                {
                    input.reviews.slice(0,4).map( item => (
                        <ReviewTiles key={item.mal_id} review={item} />
                    ))
                }
                </React.Fragment>
            </div>
        </div>  
    );
}

export default Reviews;
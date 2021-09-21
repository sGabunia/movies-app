import React from 'react'

const Review = ({reviews}) => {
 
    if(reviews?.length === 0) {
        return <p>We don't have any reviews. Would you like to write one?</p>
    }

    return <>
    {reviews &&  (
        <div className="review-card">
            <div className="review-card__info">
                <h3>A review by {reviews[0].author}</h3>
                <h5>Written by {reviews[0].author} on {new Date(reviews[0].created_at).toDateString()}</h5>
            </div>
            <p>{reviews[0].content.slice(0, 500)}</p>
        </div>)}
        </>
}

export default Review

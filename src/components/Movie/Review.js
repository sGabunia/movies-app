import React, {useState} from 'react'

const Review = ({reviews}) => {

    const [isReadAll, setIsReadAll] = useState(false)

    const someArray = !isReadAll ? reviews?.slice(0 , 1) : reviews
 
    if(reviews?.length === 0) {
        return <p>We don't have any reviews. Would you like to write one?</p>
    }

    return <>
    {reviews &&  (
        <div>
            {someArray.map((review) => {
                return ( <React.Fragment key={review.id}>
                    <div className="review-card">
                       <div className="review-card__info">
                            <h3>A review by {review.author}</h3>
                            <h5>Written by {review.author} on {new Date(review.created_at).toDateString()}</h5>
                       </div>
                        <p>{reviews[0].content.slice(0, 500)}</p>
                    </div>
            </React.Fragment>
                )
            })}
            <p onClick={() => setIsReadAll(prevState => !prevState)} className="show-reviews"><span>{!isReadAll ? "Read All Reviews" : "Show Less"}</span></p>
        </div>
        )}
        </>
}

export default Review

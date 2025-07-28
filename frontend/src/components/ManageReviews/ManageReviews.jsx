import { useDispatch, useSelector } from "react-redux";
import {thunkGetCurrentReviews} from '../../redux/review';
import { useEffect } from "react";
import UpdateReviewPage from '../UpdateReviewPage';
import DeleteReviewPage from '../DeleteReviewPage';
import OpenModalButton from '../OpenModalButton';
import './ManageReviews.css';

function ManageReviews(){
    const dispatch = useDispatch();
    const reviews = useSelector(state=>state.review.currentReview);
    useEffect(()=>{
        dispatch(thunkGetCurrentReviews())
    },[dispatch]);
    return (<>
    <h1>Manage Reviews</h1>
    <div className="review-management-wrapper">
    {
        reviews.length>0?

                    reviews.map((el,index)=>{
                return (
                    <div key={index} className="manage-review-container">
                        <h2>{el.Spot.name}</h2>
                        <p >{el.createdAt.slice(0,7)}</p>
                        <p >{el.review}</p>
                        <div className="update-delete-container">
                        <OpenModalButton
                            buttonText="Update A Review"
                            className='update-spot-review-button'
                            modalComponent={
                                <UpdateReviewPage reviewid={el.id}   spotId={el.Spot.id} theReview={{
                                    "stars":el.stars,
                                   "review":el.review
                                }}/>
                            }/>
                             <OpenModalButton
                            buttonText="Delete A Review"
                            className='update-spot-review-button'
                            modalComponent={
                                <DeleteReviewPage reviewid={el.id}   spotId={el.Spot.id} />
                            }/>
                       </div>
                    </div>
                )
            })
          
        :<h2>You dont&apos; have reviews</h2>
         
    }
     </div>
    </>)
}
export default ManageReviews;
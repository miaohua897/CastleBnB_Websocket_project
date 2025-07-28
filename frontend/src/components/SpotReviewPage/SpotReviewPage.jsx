import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {thunkGetSingleSpotReview} from '../../redux/spot';
import CreateAReview from '../CreateAReview';
import OpenModalButton from '../OpenModalButton';
import UpdateReviewPage from '../UpdateReviewPage';
import DeleteReviewPage from '../DeleteReviewPage';
import { FaStar } from 'react-icons/fa6'; 
import './SpotReviewPage.css';
function SpotReviewPage({spotId}){
    const sessionUser = useSelector(state => state.session.user);
    const thespot =useSelector(state=>state.spot);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(thunkGetSingleSpotReview(spotId))
    },[dispatch,spotId]) 

    if(Object.keys(thespot.reviews).length===0) return (
        <>
        <p>Be the first to post a review!</p>
        <OpenModalButton
            buttonText="Add A Review"
            className='add-spot-review-button'
            modalComponent={<CreateAReview spotId={spotId}/>}
        /></>);

    const thereview =thespot.reviews.Reviews;

    let isOwnerReview = false;
    if(sessionUser){
        if(thereview.length >0){
            thereview.map(el=>{
                if (el.userId===sessionUser.id){
                    isOwnerReview=true;
                    return;
                }
            })
        }
    }

    const thereviewReverse=(thereview)=>{
        let result =[];
        for(let i = thereview.length-1;i>=0;i--){
        result.push(thereview[i]);
        }
        return result;
    }
 
    return (
        <>
        {sessionUser&& !isOwnerReview?
        <OpenModalButton
        buttonText="Add A Review"
        className='add-spot-review-button'
        modalComponent={<CreateAReview spotId={spotId}/>}/>
        :null}
        {
            thereview.length>0?           
            thereviewReverse(thereview).map((el,index)=>{
                return (
                    <div key={index} className='review-container'>
                        <p><FaStar />{"  "+el.stars+'.0 '}</p>
                     <div className="review-card">
                        <p id='review-name'>{el.User.username+' says: '}</p>
                        <p id='review-review'>{el.review}</p>
                    </div>
                    {
                        sessionUser? el.userId===sessionUser.id?
                        <div className="update-delete-container">
                             <OpenModalButton
                            buttonText="Update A Review"
                            className='update-spot-review-button'
                            modalComponent={
                                <UpdateReviewPage reviewid={el.id} spotId={spotId} theReview={{
                                    "stars":el.stars,
                                   "review":el.review
                                }}/>
                            }/>


                             <OpenModalButton
                            buttonText="Delete A Review"
                            className='update-spot-review-button'
                            modalComponent={
                                <DeleteReviewPage reviewid={el.id} spotId={spotId} />
                            }/>
                     
                     
                       </div>
                            :null
                            :null
                            } </div>) })
            :<p>Be the first to post a review!</p>
        }
        </>)
}
export default SpotReviewPage;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {thunkGetSingleSpotReview} from '../../redux/spot';
import CreateAReview from '../CreateAReview';
import OpenModalButton from '../OpenModalButton';
import UpdateReviewPage from '../UpdateReviewPage';
import DeleteReviewPage from '../DeleteReviewPage';
import './SpotReviewPage.css';
function SpotReviewPage({spotId}){
    const sessionUser = useSelector(state => state.session.user);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(thunkGetSingleSpotReview(spotId))
    },[])

    const thespot =useSelector(state=>state.spot);
    if(Object.keys(thespot.reviews).length===0) return (
        <>
        <p>Be the first to post a review!</p>
        <OpenModalButton
            buttonText="Add A Review"
            className='add-spot-review-button'
            modalComponent={<CreateAReview spotId={spotId}/>}
        /></>);

    const thereview =thespot.reviews.Reviews;
    let userReview=[];
    let ownerOrNot =false;
    if(sessionUser){
        if(thereview.length >0){
            userReview = thereview.filter(el=>el.userId===sessionUser.id)
            }else{
            userReview=[];
            }
        if(sessionUser.id !==thespot.ownerId) ownerOrNot=true;
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
        {sessionUser&& userReview.length===0 && ownerOrNot?
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
                     <div >
                        {el.User? <p id='review-name'>{el.User.firstName}</p>:null}
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
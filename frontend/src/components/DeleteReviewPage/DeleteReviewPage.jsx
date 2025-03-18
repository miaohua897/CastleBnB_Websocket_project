import {thunkDeleteAReview,thunkGetSingleSpotDetail} from '../../redux/spot';
import { useDispatch } from 'react-redux';
import { useModal } from "../../context/Modal";
import './DeleteReviewPage.css';

function DeleteReviewPage({reviewid,spotId}){
    
        const dispatch=useDispatch();
        const { closeModal } = useModal();

        const handlerClickDelete=()=>{
            dispatch(thunkDeleteAReview(reviewid));
            dispatch(thunkGetSingleSpotDetail(spotId))
            closeModal()
        }
            
      
        return(
           
                <div className="delete-review-modal">
                <button 
                        type="button" 
                        id='close-delete-review-button'
                        onClick={()=>closeModal()} 
                 >
                    ✖️
                </button>
                <div className='delete-review-confirm'>
                <h1>Confirm Delete</h1>
                <p>Are you sure you want to delete this review</p>
                <button 
                className='delete-review-confirm-button'
                onClick={handlerClickDelete}
                >
                    Yes (Delete Review)
                </button>
                <button 
                className='cancel-delete-review-confirm-button'
                onClick={()=>closeModal()} 
                 >
                    No (Keep Review)
                </button>
                </div>
                </div>

        
        )

}
export default DeleteReviewPage;
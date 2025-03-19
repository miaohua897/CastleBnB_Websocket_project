import { useDispatch } from 'react-redux';
import {thunkDeleteASpot} from '../../redux/spot';
import { useNavigate } from 'react-router-dom';
import { useModal } from "../../context/Modal";
import './DeleteASpot.css';
function DeleteASpot({spotid}){
   const dispatch=useDispatch();
   const navigate=useNavigate();
    // if(!isDeleteASpotButtonModalOpen) return null;
     const { closeModal } = useModal();
    const handlerClickDelete= async()=>{
       await dispatch(thunkDeleteASpot(spotid));
        navigate('/spots/current');
        closeModal() 
    }
 return (
        <div className="delete-spot-modal">
            <button 
                type="button" 
                id="close-delete-spot-form"
                onClick={()=>closeModal()}  > ✖️</button> 
             <h1>Confirm Delete</h1>
            <p>Are you sure you want to remove this spot from the listings</p>
            <div className='delete-cancel-container'>
            <button 
            className='handle-delete-spot'
            onClick={handlerClickDelete}> Yes (Delete Spot)
            </button>
            <button 
            className='handle-cancel-button'     onClick={()=>closeModal()}>No (Keep Spot)
            </button>
            </div>
         
        </div>  )
}
export default DeleteASpot;

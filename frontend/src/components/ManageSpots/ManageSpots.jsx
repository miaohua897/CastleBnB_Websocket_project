import {thunkGetCurrentSpot} from '../../redux/spot';
import { useSelector }  from 'react-redux';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { FaStar } from 'react-icons/fa6'; 
import OpenModalButton from '../OpenModalButton';
import DeleteASpot from '../DeleteASpot';
import './ManageSpots.css';

function ManageYourSpots(){
    const navigate=useNavigate();
    const dispatch = useDispatch();
  
    useEffect(()=>{
        dispatch(thunkGetCurrentSpot())
    },[]);

    const spots = useSelector(state=>state.spot.currentSpot.Spots);
  
    const handleimage=(value)=>{
          if(!value) return "https://res.cloudinary.com/dsgfqkf7n/image/upload/eight_mezc8g?_a=BAMCkGfi0";
          else return value;
      }

   return (
    <div>
             <h1>Manage Spots</h1>
            {/* <CreateASpotButton /> */}
            <div className='spot-management-container'>
            {
                 spots?   
                 spots.map(spot=>{
                    return (
                      <div className='spot-management-outlet' key={spot.id}  >
                    <div className="tooltip-container">
                    <img onClick={()=>{navigate(`/spots/${spot.id}`);}}
                      src={handleimage(spot.previewImage)} 
                      style={{height:130,width:260}} />
                       <span className='tooltiptext'>{spot.name}</span>
                    </div>
                       <div className='spot-infomation'>
                          <p>{spot.city}{",  "+spot.state}</p>
                          <p id='spot-review-star'>
                          <a > <FaStar /></a> {'    '}    {spot.avgRating?                             
                          (Math.round(spot.avgRating * 10) / 10===5||Math.round(spot.avgRating * 10) / 10===4||Math.round(spot.avgRating * 10) / 10===3||Math.round(spot.avgRating * 10) / 10===2||Math.round(spot.avgRating * 10) / 10===1? `${Math.round(spot.avgRating * 10) / 10}.0`:Math.round(spot.avgRating * 10) / 10)
                          :"New"} </p>
                        </div>
                
                    <p>{"$"+spot.price+"  night"}</p> 
                    <div className='updateDeleteButton'>
                    <button 
                    className='updateAspotbutton'
                    onClick={
                      ()=> navigate(`/spots/${spot.id}/edit`)
                      }>Update</button>

                    <OpenModalButton
                      buttonText="Delete"
                      className='updateAspotbutton'
                      modalComponent={<DeleteASpot spotid={spot.id}/>}
                    />

                      {/* <DeleteASpotButton spotid={spot.id}/> */}
                    </div>
                    
                    

                      </div>
                    )    
               }):<p>Create a New Spot</p>
             
                 }
            </div>
             
    </div>
  
   )
}
export default ManageYourSpots;
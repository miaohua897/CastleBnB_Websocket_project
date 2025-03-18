import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {thunkGetSingleSpotDetail} from  '../../redux/spot';
import { FaStar } from 'react-icons/fa6'; 
import './SignleSpotDetail.css';


function SignleSpotDetail(){
    const {spotId} = useParams();
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(thunkGetSingleSpotDetail(spotId))
    },[])
    const thespot = useSelector(state=>state.spot.spotDetail);
    const handleReserve=()=>{
        alert('Feature coming soon')
    }

    return (
        <div className="single-spot-detail-page">     
            <div>
                    <h1 style={{color:"black",marginBottom:'30px'}}>{thespot.name}</h1>               
                    <div className="spot-image">     
                    {thespot.SpotImages?thespot.SpotImages.map((el,index)=>{
                    if(el.preview)  return <img className='main-spot-image' src={el.url} key={index} ></img>
                        }):null}
                    <div className="nopreview-image-button">
                        <div className="noPreview-images">
                        {thespot.SpotImages?thespot.SpotImages.map((el,index)=>{
                            if(!el.preview) return <img src={el.url} key={index} style={{height:100,width:200}}  id="noPreviewImagesimg"></img>
                            }):null}
                        </div>
                        <div className="price-review-container">
                            <p> {'$ '+thespot.price +' /night'} </p>
                            <p style={{color:"black"}}>
                                <FaStar style={{color:"black"}}/>
                                    {thespot.avgStarRating?
                                    (Math.round(thespot.avgStarRating * 10) / 10===5||Math.round(thespot.avgStarRating * 10) / 10===4||Math.round(thespot.avgStarRating* 10) / 10===3||Math.round(thespot.avgStarRating * 10) / 10===2||Math.round(thespot.avgStarRating * 10) / 10===1? `${Math.round(thespot.avgStarRating * 10) / 10}.0`:Math.round(thespot.avgStarRating * 10) / 10)
                                    :"New"}</p>
                        </div>
                            <button  onClick={handleReserve} id="noPreview-images-button">Reserve</button>
                    </div>
                    </div>
            
                        {thespot.Owner?(
                            <div className="owner-name">
                                <br></br>
                                <br></br>
                                <a style={{color:"black"}}>{thespot.Owner.firstName}</a>
                                <a style={{color:"black"}}>{'             '+thespot.Owner.lastName}</a>
                            </div>

                        ):null}
            
                        <p className="spot-location" style={{color:"black"}}>{"Location: "+thespot.city+',   '+thespot.state+',   '+thespot.country}</p>
                        <p className="spot-description"  style={{color:"black"}}>{'Description:  '+thespot.description}</p>
            </div>
               
                <p style={{color:"black"}}> <FaStar style={{color:"black"}}/>
                    {thespot.avgStarRating?
                      (Math.round(thespot.avgStarRating * 10) / 10===5||Math.round(thespot.avgStarRating * 10) / 10===4||Math.round(thespot.avgStarRating* 10) / 10===3||Math.round(thespot.avgStarRating * 10) / 10===2||Math.round(thespot.avgStarRating * 10) / 10===1? `${Math.round(thespot.avgStarRating * 10) / 10}.0`:Math.round(thespot.avgStarRating * 10) / 10)
                      :"New"} {"             "} {thespot.numReviews===1? `● ${thespot.numReviews} review`:thespot.numReviews===0?null: `● ${thespot.numReviews} reviews`}</p>
        
         </div>)
 
}
export default SignleSpotDetail;
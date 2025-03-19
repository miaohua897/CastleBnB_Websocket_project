import { FaStar } from 'react-icons/fa6';
import {  useEffect, useState } from 'react'; 
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { useModal } from "../../context/Modal";
import {thunkUpdateAReview} from '../../redux/spot';
import { useSelector } from 'react-redux';
import './UpdateReviewPage.css';
function UpdateReviewPage({reviewid,spotId,theReview}){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const { closeModal } = useModal();
    const sessionUser = useSelector(state => state.session.user);
    const [rating,setRating] = useState(0);
    const [newreview,setNewreview]=useState('');
    const [hovered, setHovered] = useState(false);
    const [hoveredfive, setHoveredfive] = useState(false);
    const [hoveredone, setHoveredone] = useState(false);
    const [hoveredoneone, setHoveredoneone] = useState(false);
    const [hoveredtwo, setHoveredtwo] = useState(false);
    const [hoveredtwotwo, setHoveredtwotwo] = useState(false);
    const [hoveredthree, setHoveredthree] = useState(false);
    const [hoveredthreethree, setHoveredthreethree] = useState(false);
    const [hoveredfour, setHoveredfour] = useState(false);
    const [hoveredfourfour, setHoveredfourfour] = useState(false);

    useEffect(()=>{
      setNewreview(theReview.review);
    },[])

    const handleFaStarClickFive=()=>{
        setRating(5)
        setHoveredfive(true);  // 设置为 hovered 状态
        setHoveredfourfour(true);  
        setHoveredthreethree(true);  
        setHoveredtwotwo(true);  
        setHoveredoneone(true); 
    }
    const handleMouseEnter = () => {
      setHovered(true);  // 设置为 hovered 状态
      setHoveredfour(true);  
      setHoveredthree(true);  
      setHoveredtwo(true);  
      setHoveredone(true); 
    };
    const handleMouseLeave=()=>{
      setHovered(false);
      setHoveredfour(false);
      setHoveredthree(false);  
      setHoveredtwo(false);
      setHoveredone(false);  
    }
    const handleMouseEnterOne= () => {
      setHoveredone(true);  
    };
    const handleFaStarClickOne=()=>{
        setRating(1);
        setHoveredoneone(true);  
    }
    const handleMouseLeaveOne=()=>{
      setHoveredone(false); 
    }  
    const handleFaStarClickTwo=()=>{
        setRating(2);
        setHoveredoneone(true);  
        setHoveredtwotwo(true)
    }
    const handleMouseEnterTwo= () => {
      setHoveredtwo(true);  
      setHoveredone(true);  
    };
    const handleMouseLeaveTwo =()=>{
      setHoveredtwo(false);
      setHoveredone(false);  
    }
    const handleFaStarClickThree=()=>{
        setRating(3);
        setHoveredthreethree(true);  
        setHoveredtwotwo(true);  
        setHoveredoneone(true); 
    }
    const handleMouseEnterThree= () => {
      setHoveredthree(true);  
      setHoveredtwo(true);  
      setHoveredone(true); 
    };
    const handleMouseLeaveThree=()=>{
      setHoveredthree(false);  
      setHoveredtwo(false);
      setHoveredone(false);  
    }
    const handleFaStarClickFour=()=>{
        setRating(4);
        setHoveredfourfour(true);  
        setHoveredthreethree(true);  
        setHoveredtwotwo(true);  
        setHoveredoneone(true); 
    }
    const handleMouseEnterFour= () => {
      setHoveredfour(true);  
      setHoveredthree(true);  
      setHoveredtwo(true);  
      setHoveredone(true); 
    };
    const handleMouseLeaveFour =()=>{
      setHoveredfour(false);
      setHoveredthree(false);  
      setHoveredtwo(false);
      setHoveredone(false);  
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(thunkUpdateAReview({
            "stars":rating,'review':newreview,spotId,reviewid,'User':sessionUser
        }));
     
       
        navigate(`/spots/${spotId}`);
        closeModal()
    }

    const handleUpdateReview=()=>{
       closeModal() 
        setRating(0);
        setNewreview("");
        setHovered(false);
        setHoveredfive(false);
        setHoveredone(false);
        setHoveredoneone(false);
        setHoveredtwo(false);
        setHoveredtwotwo(false);
        setHoveredthree(false);
        setHoveredthreethree(false);
        setHoveredfour(false);
        setHoveredfourfour(false);
    }
    return (
    
     <div  >
       
            <form className="update-review-container"
            onSubmit={handleSubmit}
            >
                <button
                type="button"
                id='close-update-review-button'
                onClick={handleUpdateReview}
                >
                ✖️
                </button>
            <div className="update-review-form-container">
            <label >
                      <p>How was your stay?</p> 
                      <input type="text" 
                      value={newreview}
                      onChange={(e)=>setNewreview(e.target.value)}
                      placeholder="Leave your review here..."
                      required 
                      id='review-input-container'
                      />
            </label>
            <ul className='update-review-star-container'>
    
            <div 
            onMouseEnter={handleMouseEnterOne}
            onMouseLeave={handleMouseLeaveOne}
            style={{
              color: hoveredone||hoveredoneone ? 'saddlebrown' : 'burlywood',  
              transition: 'color 0.05s ease',
              cursor: 'pointer'  
            }}
              >
               <FaStar onClick={handleFaStarClickOne}/>
            </div>
            <div  
            onMouseEnter={handleMouseEnterTwo}
            onMouseLeave={handleMouseLeaveTwo}
            style={{
              color: hoveredtwo||hoveredtwotwo ? 'saddlebrown' : 'burlywood',  
              transition: 'color 0.05s ease',
              cursor: 'pointer'  
            }}
              >
              <FaStar onClick={handleFaStarClickTwo}/>
            </div>
            <div 
            onMouseEnter={handleMouseEnterThree}
            onMouseLeave={handleMouseLeaveThree}
            style={{
              color: hoveredthree||hoveredthreethree ? 'saddlebrown' : 'burlywood',  
              transition: 'color 0.05s ease',
              cursor: 'pointer'  
            }}
              >
               <FaStar onClick={handleFaStarClickThree}/>
            </div>
            <div 
            onMouseEnter={handleMouseEnterFour}
            onMouseLeave={handleMouseLeaveFour}
            style={{
              color: hoveredfour||hoveredfourfour ? 'saddlebrown' : 'burlywood',  
              transition: 'color 0.05s ease',
              cursor: 'pointer'  
            }}
              >
            <FaStar onClick={handleFaStarClickFour}/>
            </div>
            <div 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              color: hovered||hoveredfive ? 'saddlebrown' : 'burlywood',  
              transition: 'color 0.05s ease',
              cursor: 'pointer'  
            }}
            >
               <FaStar onClick={handleFaStarClickFive}/>
              
            </div>
            <a style={{paddingLeft:15}}>Stars</a>
            </ul>
            <button 
            className={rating===0||newreview.length<10?'submit-update-review-button-disable':'submit-update-review-button'}
            type="submit"
            disabled={rating===0||newreview.length<10}
            >Submit Your Review</button>
            </div>
          
            </form>
    
        </div>
  
    
  )
}
export default UpdateReviewPage;
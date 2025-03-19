import { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import './UpdateASpotPage.css';
import {thunkGetSingleSpotDetail,thunkUpdateSpot} from  '../../redux/spot';
import { useNavigate, useParams } from 'react-router-dom';
function UpdateASpotPage(){
    const {id}= useParams();
    const dispatch=useDispatch();
    const navigate =useNavigate();
    const [country,setCountry]=useState('');
    const [address,setAddress] =useState('');
    const [city,setCity] = useState('');
    const [state,setState]=useState('');
    const [description,setDescription]=useState('');
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const lat =10;
    const lng=10;
    const [previewimage,setPreviewimage]=useState('');
    const [imageOne,setImageOne]=useState('');
    const [imageTwo,setImageTwo]=useState('');
    const [imageThree,setImageThree]=useState('');
    const [imageFour,setImageFour]=useState('');

    useEffect(()=>{
      const fetchData = async () => {
        try {
          const newData = await dispatch(thunkGetSingleSpotDetail(id));
          setCountry(newData.country)
          setAddress(newData.address)
          setCity(newData.city)
          setState(newData.state)
          setDescription(newData.description)
          setName(newData.name)
          setPrice(newData.price)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    },[dispatch,id])
 
    const handleupdateSpotSubmit= async (e)=>{
        e.preventDefault();
        const previewimagedata={
            "url": `${previewimage}`,
            "preview": true
          };
          const imageOnedata={
            "url": `${imageOne}`,
            "preview": false
          }
          const imageTwodata={
            "url": `${imageTwo}`,
            "preview": false
          }
          const imageThreedata={
            "url": `${imageThree}`,
            "preview": false
          }
          const imageFourdata={
            "url": `${imageFour}`,
            "preview": false
          }
        const updateinfo ={
            name,
            address,
            city,
            state,
            country,
            description,
            "price":Number(price),
            lat,
            lng,
            previewimagedata,
            imageOnedata,
            imageTwodata,
            imageThreedata,
            imageFourdata
          };
       await dispatch(thunkUpdateSpot(updateinfo,id))
        navigate(`/spots/${id}`);}

    const handleBackMangeSpot=()=>{
      navigate('/spots/current'); }

    return (
     
      <div className='update-spot'>
          <button onClick={handleBackMangeSpot}
          className='back-manage-spot-button'
          >✖️</button>
        <div className="update-spot-form-modal">
          <h1 style={{color:'white'}}>Update your Spot</h1>
          <p style={{color:'white'}}>Guests will only get your exact address once they booked a reservation.</p>
          <form className="update-spot-container" onSubmit={handleupdateSpotSubmit} >
             
            <div className="update-spot-form-container">
                  <p  style={{color:'white'}}>Country</p>
                  <label style={{color:'white'}} >
                    <input type="text" 
                    className='update-spot-input'
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required />
                  </label>
                  <p  style={{color:'white'}}> Street Address</p>

                  <label
                  style={{color:'white'}}>
                    <input type="text" 
                    className='update-spot-input'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required />
                  </label>    

                  <div className='city-state-update'>
                      <div>
                        <p style={{color:'white'}}>City</p>
                        <label
                        style={{color:'white'}} >
                          <input type="text"                  
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className='update-spot-city-state-input'
                          required />
                        </label>
                      </div>
                  <div>
  
                    <p style={{color:'white'}}>State</p>
                    <label
                    style={{color:'white'}}>
                      <input type="text"          
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      required />
                    </label>
          
                </div>
              
              </div>
               
                <h1
                style={{color:'white'}}
                >Describe your place to guests</h1>
                <p
                style={{color:'white'}}
                >Mention the best features of your space, any special amenities like fast wifi or parking, and what you love about the neighborhood.</p>
                <label style={{color:'white'}}>   
                  <input type="text" 
                    className='updat-spot-description-input'
                     value={description}
                     onChange={(e) => setDescription(e.target.value)}
                  required placeholder='Please write at least 30 characters'/>
                </label>
                {/* <p style={{color:'red'}}>{errors.description?errors.description:null}</p> */}
                <h1 style={{color:'white'}}>Create a title for your spot</h1>
                <p style={{color:'white'}}>Catch guests&apos; attention with a spot title that highlights what makes your place special.</p>
                <label style={{color:'white'}}>   
                  <input type="text" 
                          className='update-spot-input'
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                  required 
                  placeholder='Name of your spot'/>
                </label>
                {/* <p style={{color:'red'}}>{errors.name?errors.name:null}</p> */}
                <h1 style={{color:'white'}}>Set a base price for your spot</h1>
                <p style={{color:'white'}}>Competitive pricing can help your listing stand out and rank higher in search results.</p>
                <label style={{color:'white'}}>  
                    {'$ * / night '}
                  <input type="number" 
                  min='1'
                    className='update-spot-input'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  required placeholder='Price per night (USD)'/>
                </label>
                {/* <p style={{color:'red'}}>{errors.price?errors.price:null}</p> */}
                <h1 style={{color:'white'}}>Liven up your spot with photos</h1>
                <p style={{color:'white'}}>Submit a link to at least one photo to publish your spot.</p>
                <div className='updateUrl'>
                <label style={{color:'white'}}>   
                  <input type="url"                 
                     value={previewimage}
                      className='updateUrlInput'
                     onChange={(e) => setPreviewimage(e.target.value)}
                  // required 
                  placeholder='http://example.com'/>
                </label>
                <label style={{color:'white'}}>   
                  <input type="url"                        
                     value={imageOne}
                     className='updateUrlInput'
                     onChange={(e) => setImageOne(e.target.value)}
                  // required 
                  placeholder='http://example.com'/>
                </label>
                <label style={{color:'white'}}>   
                  <input type="url"                         
                     value={imageTwo}
                     className='updateUrlInput'
                     onChange={(e) => setImageTwo(e.target.value)}
                  // required 
                  placeholder='http://example.com'/>
                </label>
                <label style={{color:'white'}}>   
                  <input type="url"                            
                     value={imageThree}
                     className='updateUrlInpt'
                     onChange={(e) => setImageThree(e.target.value)}
                  // required 
                  placeholder='http://example.com'/>
                </label>
                <label style={{color:'white'}}>   
                  <input type="url"                 
                     value={imageFour}
                     className='updateUrlInput'
                     onChange={(e) => setImageFour(e.target.value)}
                  // required 
                  placeholder='http://example.com'/>
                </label>
                </div>           
                <button 
                className='update-spot-button'
                type="submit">Update Spot</button>
            </div>
          </form>
        </div>
    </div>);
}
export default UpdateASpotPage;
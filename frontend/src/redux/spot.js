import { csrfFetch } from './csrf';

const LOAD_CURRENT_SPOT = 'spot/loadCurrentSpot';
const LOAD_REVIEW ='spot/loadReview';
const LOAD_SPOT ='spot/loadSpot';
const LOAD_SPOT_DETAIL ='spot/loadSpotDetail';
const LOAD_SPOT_REVIEW ='spot/loadSpotReview';
const UPDATE_REVIEW ='spot/updateReview';
const REMOVE_SPOT = 'spot/removeSpot';
const REMOVE_Review ='spot/removeSpotReview';

const loadCurrentSpot=(data)=>{
    return {
        type:LOAD_CURRENT_SPOT,
        payload:data
    }
}

const loadSpot=(data)=>{
    return {
        type:LOAD_SPOT,
        payload:data
    }
}

const loadSpotDetail=(data)=>{
    return{
        type:LOAD_SPOT_DETAIL,
        payload:data
    }
}

const loadReview=(data)=>{
    return {
        type:LOAD_REVIEW,
        payload:data
    }
}

const loadSpotReview=(data)=>{
    return {
        type:LOAD_SPOT_REVIEW ,
        payload:data
    }
}

const updateReview=(data)=>{
    return {
        type:UPDATE_REVIEW,
        payload:data
    }
}

const removeSpot = (spotid) => {
    return {
      type: REMOVE_SPOT,
      payload:spotid
    };
  };

// const removeReview = (reviewid) => {
//     return {
//       type: REMOVE_Review,
//       payload:reviewid
//     };
//   };

export const thunkGetSpot=()=> async (dispatch)=>{
    const res = await fetch('/api/spots');
    if(res.ok){
        const data = await res.json();
        const newdata = data;
        dispatch(loadSpot(newdata));
        return res;
    }
}

export const thunkGetCurrentSpot=()=> async (dispatch)=>{
    try{
        dispatch(loadCurrentSpot({'Spots':[]}));
        const res = await csrfFetch('/api/spots/current');
        if(res.ok){
            const data = await res.json();
            const newdata = data;
            dispatch(loadCurrentSpot(newdata));
            return res;
        }
    }catch(error){
        console.log('error',error);
    
    }
}


export const thunkUpdateAReview=(data)=>async(dispatch)=>{
    const {reviewid,review,stars}=data;
    try{
        const res =  await csrfFetch(`/api/reviews/${reviewid}`, {
            method: "PUT",
            body: JSON.stringify({
                review,
                stars
            })
          });
        if(res.ok){
            const datares = await res.json();
            console.log('datares',datares);
            dispatch(updateReview(datares));
            return datares;
        }
    }catch(e){
        console.log(e);
    }
}

export const thunkDeleteASpot = (spotid) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotid}`, {
      method: 'DELETE'
    });
    dispatch(removeSpot(spotid))
    return response;
};

export const thunkDeleteAReview = (reviewid) => async () => {
    const response = await csrfFetch(`/api/reviews/${reviewid}`, {
      method: 'DELETE'
    });
    return response;   
};

export const thunkCreateAReview=(data)=> async (dispatch)=>{
    const {spotId,review,stars} = data;
      try{
        const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
            method: "POST",
            body: JSON.stringify({
                review,
                stars
            })
          });
        if(response.ok){
            const data = await response.json();
            const newdata = data;
        
            dispatch(loadReview(newdata));
            return newdata;
        }
      }catch(error){
        console.log('newreviewerror',error);
      }   
}

export const thunkUpdateSpot=(data,spotId)=> async (dispatch)=>{
    const {
        name,
        address,
        city,
        state,
        country,
        description,
        price,
        lat,
        lng } = data;
      
    try{
        const res = await csrfFetch(`/api/spots/${spotId}`,{
            method: "PUT",
            body: JSON.stringify({
                name,
                address,
                city,
                state,
                country,
                description,
                price,
                lat,
                lng
            })
        })
    
        if(res.ok){
            const data = await res.json();
            const newdata = data;
            dispatch(loadSpot(newdata));
        }
    }catch(e){
        console.log(e);
    }
}

export const thunkCreateSpot=(data)=> async (dispatch)=>{
    const {
        name,
        address,
        city,
        state,
        country,
        description,
        price,
        lat,
        lng,
        previewimagedata,
        imageOnedata,
          imageTwodata,
          imageThreedata,
          imageFourdata
      } = data;
      const {
        url,
        preview
    }=previewimagedata;
    try{
        const res = await csrfFetch('/api/spots',{
            method: "POST",
            body: JSON.stringify({
                name,
                address,
                city,
                state,
                country,
                description,
                price,
                lat,
                lng
            })
        })
    
        if(res.ok){
            const data = await res.json();
            const newdata = data;
            dispatch(loadSpot(newdata));
         await csrfFetch(`/api/spots/${newdata.id}/images`,{
            method: "POST",
            body: JSON.stringify({
                url,
                preview
              })
        });

        await csrfFetch(`/api/spots/${newdata.id}/images`,{
            method: "POST",
            body: JSON.stringify({
                'url':imageOnedata.url,
                'preview':false
              })
        });
        await csrfFetch(`/api/spots/${newdata.id}/images`,{
            method: "POST",
            body: JSON.stringify({
                'url':imageTwodata.url,
                'preview':false
              })
        });
        await csrfFetch(`/api/spots/${newdata.id}/images`,{
            method: "POST",
            body: JSON.stringify({
                'url':imageThreedata.url,
                'preview':false
              })
        });
        await csrfFetch(`/api/spots/${newdata.id}/images`,{
            method: "POST",
            body: JSON.stringify({
                'url':imageFourdata.url,
                'preview':false
              })
        });
            return newdata;
        }
    }catch(e){
        console.log('e',e);
        const e_data = await e.json();
        return e_data;
    }
  

}

export const thunkGetSingleSpotDetail=(spotId)=> async (dispatch)=>{
    const res = await csrfFetch(`/api/spots/${spotId}`);
    if(res.ok){
        const data = await res.json();
        const newdata = data;
        dispatch(loadSpotDetail(newdata));
        return res;
    }
}
export const thunkGetSingleSpotReview=(spotId)=> async (dispatch)=>{
    try{
        const res = await fetch(`/api/spots/${spotId}/reviews`);
        if(res.ok){
            const data = await res.json();
            const newdata = data;
            dispatch(loadSpotReview(newdata));
            return res;
        }else{
            dispatch(loadSpotReview({
                Reviews:[]
            }))
        }
    }catch(error){
        console.log(error);
    }
    
}

const spotReducer = (state={currentSpot:[],reviews:{Reviews:[]},spotDetail:{}},action)=>{
    switch(action.type){
        case LOAD_SPOT :
            return {...state,...action.payload};
        case LOAD_SPOT_DETAIL:
            return {...state,'spotDetail':action.payload}
        case LOAD_SPOT_REVIEW:
            return {...state,'reviews':action.payload};
        case  LOAD_REVIEW :
             {
                const objreview ={...state};
                objreview.reviews.Reviews.push(action.payload)
                return objreview;
            }
        case UPDATE_REVIEW :
                {
                    const objreviewUpdate ={...state};
                    objreviewUpdate.reviews.Reviews=objreviewUpdate.reviews.Reviews.map(el=>{
                        if(el.id===action.payload.id){
                            return action.payload;}
                        return el;})
                    return objreviewUpdate;
                }
        case LOAD_CURRENT_SPOT:
            return {
                ...state,'currentSpot':action.payload
            }
        case REMOVE_Review :
           {
             const obj={...state};
             obj.reviews.Reviews.map((el,index)=>{
                 if(el.id===action.payload){
                     obj.reviews.Reviews.splice(index,1);}})
             return obj;
           }
        case REMOVE_SPOT:        
              {             
                const obj={...state};
                obj.currentSpot.Spots.map((el,index)=>{
                    if(el.id===action.payload){
                        obj.currentSpot.Spots.splice(index,1);
                    }})
                return obj;
              }
        default:
            return state;
    }
};

export default spotReducer;
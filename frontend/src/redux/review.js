import { csrfFetch } from './csrf';
const LOAD_CURRENT_REVIEW ='review/loadCurrentReview';
const UPDATE_MANAGE_REVIEW = 'review/updateMangeReview';
const REMOVE_MANAGE_REVIEW = 'review/removeMangeReview';



const loadCurrentReview=(data)=>{
    return {
        type:LOAD_CURRENT_REVIEW,
        payload:data
    }
}

const updateManageReview=(data)=>{
    return {
        type:UPDATE_MANAGE_REVIEW,
        payload:data
    }
}

const removeManageReview = (reviewid) => {
    return {
      type:  REMOVE_MANAGE_REVIEW,
      payload:reviewid
    };
};


export const thunkUpdateManageReview=(data)=>async(dispatch)=>{
    const {
        reviewid,
        review,
        stars
    }=data;
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
            dispatch(updateManageReview(datares));
            return datares;
        }
    }catch(e){
        console.log(e);
    }
}



export const thunkDeleteManageReview = (reviewid) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewid}`, {
      method: 'DELETE'
    });
    if(response.ok){
        const data = await response.json();
        dispatch(removeManageReview (reviewid));
        return data;
    }

   
};


export const thunkGetCurrentReviews=()=>async(dispatch)=>{
    try{
        const res = await csrfFetch('/api/reviews/current');
        if(res.ok){
            const data = await res.json();
            const newdata= data;
            dispatch(loadCurrentReview(newdata));
            return res
        }
    }catch(e){
        console.log(e);
    }
}



const reviewReducer = (state={currentReview:[]},action)=>{
    switch(action.type){
        case LOAD_CURRENT_REVIEW :
            {
                const reviewobj={...state};
                reviewobj.currentReview=action.payload.Reviews;
                return reviewobj;
            }
        case REMOVE_MANAGE_REVIEW :
            {
                const reviewobj={...state};
                reviewobj.currentReview.map((el,index)=>{
                    if(el.id===action.payload){
                        reviewobj.currentReview.splice(index,1);}
                })
                return reviewobj;
            }
        case UPDATE_MANAGE_REVIEW :
            {
                const reviewobj={...state};
                reviewobj.currentReview=reviewobj.currentReview.map(el=>{
                    if(el.id===action.payload.id){
                        el.review=action.payload.review;
                        el.stars=action.payload.stars;
                        return el;
                    }
                    return el;
                })
                return reviewobj;
            }
        default:
            return state;
    }
}
export default reviewReducer;
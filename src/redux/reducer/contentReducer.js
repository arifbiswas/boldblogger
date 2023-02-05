import { ADD_CONTENT, ADD_TAGS, DELETE_CONTENT, GET_CONTENT, GET_TAGS, UPDATE_CONTENT } from "../actionTypes/actionTypes"

const initialState ={
    contents : [],
    tags : []
}

export const contentReducer = ( state = initialState , action)=>{
   switch (action.type) {
    case GET_CONTENT : {
        return {
            ...state,
            contents : action.payload
        }
    }
    case ADD_CONTENT : {
        return {
            ...state,
            contents : [...state?.contents,action.payload]
        }
    }
    case DELETE_CONTENT : {
        return {
            ...state,
            contents : action.payload
        }
    }
    case UPDATE_CONTENT : {
        return {
            ...state,
            contents : action.payload
        }
    }
    case GET_TAGS : {
        return {
            ...state,
            tags : action.payload
        }
    }
    case ADD_TAGS : {
        return {
            ...state,
            tags : [...state?.tags,action.payload]
        }
    }
    default:
        return state;
 }
} 
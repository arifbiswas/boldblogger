import { ADD_CONTENT, ADD_TAGS, DELETE_CONTENT, GET_CONTENT, GET_TAGS, UPDATE_CONTENT } from "../actionTypes/actionTypes"

export const addContent = (data)=>{
    return {
        type : ADD_CONTENT,
        payload : data
    }
}
export const loadContent = (data)=>{
    return {
        type : GET_CONTENT,
        payload : data
    }
}
export const deleteBeforeContent = (data)=>{
    return {
        type : DELETE_CONTENT,
        payload : data
    }
}
export const updateContent = (data)=>{
    return {
        type : UPDATE_CONTENT,
        payload : data
    }
}
export const addTags = (data)=>{
    return {
        type : ADD_TAGS,
        payload : data
    }
}
export const loadTags = (data)=>{
    return {
        type : GET_TAGS,
        payload : data
    }
}
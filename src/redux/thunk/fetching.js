import axios from "axios";
import { loadContent, loadTags } from "../actionCreators/actionCreators";

export const fetchingContent = () =>{
    return (dispatch , getState)=>{
       axios.get("https://boldblogger-server-arifbiswas.vercel.app/contents").then(res => {
        //    console.log(res.data.data);
           if(res.data.data.length > 0){
               dispatch(loadContent(res.data.data))
           }
       })
        
    }

}
export const fetchingTags = () =>{
    return (dispatch , getState)=>{
       axios.get("https://boldblogger-server-arifbiswas.vercel.app/tags").then(res => {
        //    console.log(res.data.data);
           if(res.data.data.length > 0){
               dispatch(loadTags(res.data.data))
           }
       })
        
    }

}
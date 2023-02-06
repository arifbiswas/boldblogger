import axios from "axios";
import { addContent, addTags } from "../actionCreators/actionCreators";
import { toast } from 'react-toastify';
export const postContent = (content) =>{
    console.log(content)
return async (dispatch , getState)=>{
     await  axios.post("https://boldblogger-server-arifbiswas.vercel.app/content",content).then(res =>{
        console.log(res.data)
        if(res.data.acknowledged){
          content._id = res.data.insertedId;
          dispatch(addContent(content))
          toast.success("Blog Add Successfully")
        }
        else{
          toast.error("Blog add not Successfully") 
        }
      })
}
}
export const postTags = (tags) =>{
    console.log(tags)
return async (dispatch , getState)=>{
     await  axios.post("https://boldblogger-server-arifbiswas.vercel.app/tags",tags).then(res =>{
        console.log(res.data)
        if(res.data.acknowledged){
          dispatch(addTags(tags))
          toast.success("tag Add Successfully")
        }
        else{
          toast.error("Tag add not Successfully")
        }
      })
}
}
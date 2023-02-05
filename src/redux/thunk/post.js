import axios from "axios";
import { addContent, addTags } from "../actionCreators/actionCreators";
export const postContent = (content) =>{
    console.log(content)
return async (dispatch , getState)=>{
     await  axios.post("http://localhost:5000/content",content).then(res =>{
        console.log(res.data)
        if(res.data.acknowledged){
          dispatch(addContent(content))
        }
      })
}
}
export const postTags = (tags) =>{
    console.log(tags)
return async (dispatch , getState)=>{
     await  axios.post("http://localhost:5000/tags",tags).then(res =>{
        console.log(res.data)
        if(res.data.acknowledged){
          dispatch(addTags(tags))
        }
      })
}
}
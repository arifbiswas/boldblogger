import axios from "axios";
import { updateContent } from "../actionCreators/actionCreators";
export const updateOnDbContent = (id,newUpdateContent) =>{
    console.log(newUpdateContent)
return async (dispatch , getState)=>{
        await  axios.patch(`http://localhost:5000/content/${id}`,newUpdateContent).then(res =>{
        console.log(res.data)
        const  state = getState();
     console.log(state)
        if(res.data.result.modifiedCount > 0){
          
          const updateBeforeContent = state.contents.filter(content => content._id !== id)
        
        const updateAfterContent = [...updateBeforeContent,res.data.newContent]
          dispatch(updateContent(updateAfterContent))
        }
      })
     
 }
}
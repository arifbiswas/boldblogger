import axios from "axios";
import { updateContent } from "../actionCreators/actionCreators";
import { toast } from 'react-toastify';

export const updateOnDbContent = (id,newUpdateContent,navigation) =>{
    console.log(newUpdateContent)
return async (dispatch , getState)=>{
        await  axios.patch(`https://boldblogger-server-arifbiswas.vercel.app/content/${id}`,newUpdateContent).then(res =>{
        console.log(res.data)
        const  state = getState();
     console.log(state)
        if(res.data.result.modifiedCount > 0){
          
          const updateBeforeContent = state.contents.filter(content => content._id !== id)
        
        const updateAfterContent = [...updateBeforeContent,res.data.newContent]

          dispatch(updateContent(updateAfterContent))
          navigation("/dashboard")
          toast.success("Update successfully")
        }
        else{
          toast.error("Update not successfully")
        }
      })
     
 }
}
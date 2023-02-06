import axios from "axios";
import { deleteBeforeContent } from "../actionCreators/actionCreators";
import { toast } from 'react-toastify';
export const deleteContent = (id) =>{
    console.log(id)
return async (dispatch , getState)=>{
     const confirm = window.confirm(`Are you sure you want to delete`)
     if(confirm){
        await  axios.delete(`https://boldblogger-server-arifbiswas.vercel.app/content/${id}`).then(res =>{
        console.log(res.data)
        const  state = getState();
     console.log(state)
        if(res.data.deletedCount > 0){
          const newDeleteBeforeContent = state.contents.filter(content => content._id !== id)
          dispatch(deleteBeforeContent(newDeleteBeforeContent))
          toast.success("Delete Successfully")
        }
      })
     }else{
      toast.error("Delete not Successfully")
        return;
      
     }
 }
}
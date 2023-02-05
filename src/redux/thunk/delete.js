import axios from "axios";
import { deleteBeforeContent } from "../actionCreators/actionCreators";
export const deleteContent = (id) =>{
    console.log(id)
return async (dispatch , getState)=>{
     const confirm = window.confirm(`Are you sure you want to delete`)
     if(confirm){
        await  axios.delete(`http://localhost:5000/content/${id}`).then(res =>{
        console.log(res.data)
        const  state = getState();
     console.log(state)
        if(res.data.deletedCount > 0){
          const newDeleteBeforeContent = state.contents.filter(content => content._id !== id)
          dispatch(deleteBeforeContent(newDeleteBeforeContent))
        }
      })
     }else{
        return;
     }
 }
}
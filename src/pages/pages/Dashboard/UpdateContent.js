
import { Dropdown } from 'flowbite-react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateOnDbContent } from '../../../redux/thunk/update';
import randomColor from 'randomcolor';

const UpdateContent = () => {
    const color = randomColor();
    const navigation = useNavigate();
    const [updateContent, setUpdateContent] = useState({})
    const {contents , tags} = useSelector(state => state)
    const {id} = useParams()
    useEffect(()=>{
    const singleContent = contents?.find(content => content?._id === id); 
    setUpdateContent(singleContent)
    },[id])
    // console.log(updateContent)
  const [selectedTags , setSelectedTags] = useState([])
  const dispatch = useDispatch()

    const { register, handleSubmit ,reset} = useForm();
  const onSubmit = content => {
    if(selectedTags.length > 0)  {
        content.tags = selectedTags;
    }
    if(!content.photoLink){
        content.photoLink = updateContent.photoLink
    }
    if(!content.title){
        content.title = updateContent.title
    }
    if(!content.description){
        content.description = updateContent.description
    }
    if(!content.tags){
        content.tags = updateContent.tags
    }
    content.date = new Date().toLocaleDateString();;
    content.view = 0;

   dispatch(updateOnDbContent(id,content,navigation))
  };

  const addSelectTags = (tag)=>{
    const newAddTags = selectedTags.find(tg => tg._id === tag._id)
    if(!newAddTags){
      setSelectedTags([...selectedTags,tag])
      
    }else{
      return;
    }

  }
  const removeSelectTag =(tag)=>{
    const newAddTags = selectedTags.filter(tg => tg._id !== tag._id)
    setSelectedTags(newAddTags)
  }
 
    return (

      <div className="bg-gray-200 h-[94vh] rounded-md relative">
     
      <div className="z-20 relative top-10 ">
      <div className="flex justify-center items-center p-3 bg-white h-[85vh] w-[85%] mx-auto rounded-md shadow-2xl">
        {/* content  */}
        <div className='w-96 mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 ">
            <img className='rounded-md' src={updateContent?.photoLink} alt="" />
      <input className='text-lg border border-gray-400 rounded-md px-3 py-2 ring  ring-3 focus:outline-4  focus:outline outline-gray-500'  {...register("photoLink")} defaultValue={updateContent?.photoLink} />
      <input className='text-lg border border-gray-400 rounded-md px-3 py-2 ring  focus:ring-3 outline-4  focus:outline outline-gray-500'  {...register("title")} defaultValue={updateContent?.title}/>

      <Dropdown
       size="lg"
  label="#tags"
  dismissOnClick={false}
  color="gray"
>
  {
        
        tags.map(tag => <Dropdown.Item
         onClick={()=>addSelectTags(tag)}
         key={tag._id}>{tag.tag}</Dropdown.Item>)
       }
</Dropdown>

      <div className=' flex flex-wrap gap-2 text-lg border border-gray-400 rounded-md px-3 py-2 ring  focus:ring-3 outline-4  focus:outline outline-gray-500' aria-disabled > 
      {
        selectedTags.length > 0 ? selectedTags.map(tag => <button
        style={{
    background : color
  }}
         onClick={()=>removeSelectTag(tag)} key={tag._id} className={`font-black bg-[${tag?.color}] p-1 rounded-md`}>{tag?.tag}</button>) 
        :updateContent ? updateContent?.tags?.map(tag => <button
        style={{
    background : color
  }}
         onClick={()=>removeSelectTag(tag)} key={tag._id} className={`font-black bg-[${tag?.color}] p-1 rounded-md`}>{tag?.tag}</button> ) : <p className='font-bold text-gray-500'>please select tags </p>
      }
       </div>
      <input className='text-lg border border-gray-400 rounded-md px-3 py-2 ring  focus:ring-3 outline-4  focus:outline outline-gray-500' {...register("description")}  defaultValue={updateContent?.description} />
      <input className='bg-[#8482ff] hover:bg-[#5653d9] text-lg font-bold p-2 text-white rounded-md' type="submit" />
    </form>
        </div>

      </div>
      </div>
      <div className="absolute top-0 bg-[#8482ff] w-full h-20 rounded-md"></div>
    </div>

      
    );
};

export default UpdateContent;
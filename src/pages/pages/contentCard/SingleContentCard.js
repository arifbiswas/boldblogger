import { Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleContentCard = () => {
  const [singleContent, setSingleContent] = useState({})
    const {contents , tags} = useSelector(state => state)
    const {id} = useParams()
    useEffect(()=>{
    const getSingleContent = contents?.find(content => content?._id === id); 
    setSingleContent(getSingleContent)
    },[id])
    return (
       <div className='bg-[] p-1 lg:p-2 h-[94vh]'>
         <div className="container mx-auto">
  <Card>
  <div style={{backgroundImage : `url(${singleContent?.photoLink})` , backgroundPosition : "center" , opacity : "80%"}} 
  >

  <div className='h-96 rounded-md w-[100%] bg-black opacity-25'
  >
    
  </div>

  </div>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {singleContent?.title}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    {singleContent?.description}
    </p>
  </Card>
</div>
       </div>
    );
};

export default SingleContentCard;
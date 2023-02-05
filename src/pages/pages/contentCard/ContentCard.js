import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye ,FaCalendarCheck } from "react-icons/fa";
import randomColor from 'randomcolor';

const ContentCard = ({content}) => {
  const color = randomColor();

    return (
       <div className='shadow-md rounded-sm'>
         <Card>
 <div className='flex flex-col lg:flex-row gap-5'>
    <div className=''>
        <img className='rounded-md w-96 h-[250px]' src={content?.photoLink} alt="" />
    </div>
    <div className='flex-1 p-2'>
    <div className='flex justify-between gap-3 mb-1'>
     
      <h1 className='flex items-center gap-2'><FaCalendarCheck></FaCalendarCheck> <span>{content?.date}</span></h1>
      <h1 className='flex items-center gap-2'><FaEye></FaEye> <span> {content?.view}</span></h1>
    </div>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {content?.title}
  </h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">
  {content?.description}
  </p>
    </div>
 </div>
 <div className='flex gap-3 mx-3 border p-1 rounded-md border-gray-300'>
 <p className='font-black bg-[#8482ff] text-white p-2 rounded-md'>#Tags : 

</p>
<div className='flex gap-3'>
  {
    content?.tags.map(tag =><button key={tag._id} style={{
      background : color
    }} className={`font-black rounded-md  border-2 hover:border-b text-white hover:border-blue-700  p-2 `}>{tag.tag}</button>)
  }
</div>
 </div>

   <Link
   to={`/content/${content._id}`}
   className='flex justify-center items-center font-bold p-2  bg-[#8482ff] rounded-md text-white'
   >
   Read more
    <svg
      className="ml-2 -mr-1 h-4 w-4"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
   </Link>
  
</Card>
       </div>
    );
};

export default ContentCard;
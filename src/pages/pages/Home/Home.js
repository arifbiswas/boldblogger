import React from 'react';
import { useSelector } from 'react-redux';

import ContentCard from '../contentCard/ContentCard';

const Home = () => {
    const contents = useSelector(state => state.contents)
    return (
        <div className='bg-slate-300 p-1 lg:p-2'>
            <div className='container mx-auto my-8 bg-white p-5 rounded-md shadow-2xl'>
           <div className='grid grid-cols-1  gap-3'>
           {
            contents.length > 0 ?  contents.map(content => <ContentCard
            key={content._id}
            content={content}
            ></ContentCard>)
            : <p className='font-bold text-gray-500'>No data found please add new data </p>
           }
           
           </div>
        </div>
        </div>
    );
};

export default Home;

// bg-[#8482ff]
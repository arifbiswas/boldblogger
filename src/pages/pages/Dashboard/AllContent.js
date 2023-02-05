import { Table } from 'flowbite-react';
import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContent } from '../../../redux/thunk/delete';
import randomColor from 'randomcolor';


const AllContent = () => {
  const contents = useSelector(state => state.contents)
  const dispatch = useDispatch()

  const deleteHandler =(id)=>{
    dispatch(deleteContent(id))
  }

    return (

      <div className={`bg-gray-200 ${contents.length >= 8 ? "h-[100%] pb-14" : "h-[94vh]"} rounded-md relative`}>
     
      <div className="z-20 relative top-10 ">
      <div className={`bg-white ${contents.length >= 8 ? "h-full" : "h-[94vh]"} w-[85%] mx-auto p-3 rounded-md shadow-2xl`}>
        {/* content  */}
        <div>
           <Table hoverable={true}>
  <Table.Head>
    <Table.HeadCell>
      Picture
    </Table.HeadCell>
    <Table.HeadCell>
      Title
    </Table.HeadCell>
    <Table.HeadCell>
      Description
    </Table.HeadCell>
    <Table.HeadCell>
    
        Actions
     
    </Table.HeadCell>
  </Table.Head>
  <Table.Body className="divide-y">
    {
      contents.map(content => <Table.Row key={content._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
       <img className='w-20 h-20' src={content?.photoLink} alt={content?.title} />
      </Table.Cell>
      <Table.Cell>
      {content?.title}
      </Table.Cell>
      <Table.Cell>
      {content?.description.slice(0,150)}
      </Table.Cell>
      <Table.Cell>
      <div className='flex gap-3 items-center justify-center'>
      <button 
      onClick={()=>deleteHandler(content?._id)}
       className='text-red-500 text-2xl'><FaTrashAlt></FaTrashAlt></button>
      <Link to={`/dashboard/updateContent/${content?._id}`} className='text-green-500 text-2xl'><FaEdit></FaEdit></Link>
      </div>
      </Table.Cell>
    </Table.Row>)
    }
   
  </Table.Body>
</Table>
        </div>

      </div>
      </div>
      <div className="absolute top-0 bg-[#8482ff] w-full h-20 rounded-md"></div>
    </div>

     
    );
};

export default AllContent;
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postTags } from "../../../redux/thunk/post";

const AddTags = () => {

  const dispatch = useDispatch()

  const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
    dispatch(postTags(data))
    reset()
  };

  return (
    <div className="bg-gray-200 h-[94vh] rounded-md relative">
     
      <div className="z-20 relative top-10 ">
      <div className="flex justify-center items-center px-3 bg-white h-[85vh] w-[85%] mx-auto rounded-md shadow-2xl">
        {/* content  */}
        <div className="w-96 mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3 "
          >
            <input
              className="text-lg border border-gray-400 rounded-md px-3 py-2 ring  focus:ring-3 outline-4 backdrop-blur-md focus:outline outline-gray-500"
              placeholder="tag"
              {...register("tag")}
              required
            />
            <input
              className="bg-[#8482ff] hover:bg-[#5653d9] text-lg font-bold p-2 text-white rounded-md"
              type="submit"
            />
          </form>
        </div>

      </div>
      </div>
      <div className="absolute top-0 bg-[#8482ff] w-full h-20 rounded-md"></div>
    </div>
  );
};

export default AddTags;

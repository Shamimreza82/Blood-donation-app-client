
import React, { useRef, useState } from "react";
import JoditEditor from 'jodit-react';
import { useForm } from "react-hook-form";
import { imageUplode } from "../../../../api/ultis";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const AddBlog = () => {
    const editor = useRef(null)
    const [content, setContent] = useState('')
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()

const {
  register,
  handleSubmit,
  watch,
  formState: { errors },
} = useForm()

const onSubmit = async (data) => {
  const title = data.title
  const image = data.image[0] 
  
  const result = await imageUplode(image)


const blogPost = {
  title: title, 
  content: content, 
  image: result?.data?.display_url, 
  status: 'draft'
}


  const res = await axiosSecure.post('/blog',blogPost )
  console.log(res.data);
  if(res.data.acknowledged){
    toast.success("blog Add successfull")
    navigate('/dashboard/contentManagement')
  }


} 
 





  return (
    <div>
      <div className="w-[70%] m-auto">
        <div className="py-6 font-bold text-gray-700 mb-6">
          <h1 className="text-3xl">New Blog Post Entry</h1>
          <p>Kindly provide clearly the following information.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="space-y-6">
          <div >
            <div >
              <label className="block text-sm font-medium text-neutral-600 ">
                {" "}
                Blog Titel
              </label>
              <div className="mt-1 w-full">
                <input
                  id="email"
                  name="title"
                  {...register('title')}
                  type="text"
                  required=""
                  placeholder="Blog Titel"
                  className="block  w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                />
              </div>
            </div>
            
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-600">
              {" "}
              Blog Containt
            </label>
            {/* <textarea
              className="block w-full px-5 py-3 mt-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 apearance-none autoexpand"
              id="description"
              type="text"
              name="description"
              placeholder="Message..."
              required=""
            ></textarea> */}
            <JoditEditor
                ref={editor}
                value={content}
                tabIndex={1} 
                onBlur={newContent => setContent(newContent)}
                onChange={newContent => setContent(newContent)}
            ></JoditEditor>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-600 py-2">
              {" "}
              Upload Image
            </label>
            <input
            {...register('image')}
            type="file" name="image" id="" />
          </div>

          <div>
            <button
              type="submit"
              className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create Post
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;

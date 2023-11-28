import React from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useUserInfo from "../../../../Hooks/useUserInfo";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { MdPublishedWithChanges, MdOutlineUnpublished  } from "react-icons/md";
import { Helmet } from "react-helmet";

const ContantManagement = () => {
  const axiosPublic = useAxiosPublic()
  const [singleUser] = useUserInfo()

  const {data: blogs =[], refetch} = useQuery({
    queryKey: ['blog'], 
    queryFn: async () => {
        const res = await axiosPublic.get('/blog')
            return await res.data
    }
})

console.log(blogs);


const handelDeleteBloge = (id) => {
  console.log(id);
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then( async(result) => {
    if (result.isConfirmed) {

    const res = await axiosPublic.delete(`/blog/${id}`)
    console.log(res.data);
    refetch()
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
}


const handelPublish = async (id) => {
  const status = "publish"
  console.log(id, status );
  const res = await axiosPublic.put(`/blog/${id}`, {status: status} )
  console.log(res.data);
  toast.success('Blog Published')
      refetch() 
}

const handelUnPublish = async (id) => {
  const status = "draft"
  console.log(id, status );
  const res = await axiosPublic.put(`/blog/${id}`, {status: status} )
  console.log(res.data);
  toast.success('Blog Published')
      refetch() 
}


  return (
    <div>
            <Helmet>
                <title>Life Lines | Dashboard | Content Management</title>
            </Helmet>
      <h1 className="text-center py-8 text-3xl font-bold border-b">Blogs </h1>
        <div className="flex justify-end mt-4">
            <Link to='/dashboard/contentManagement/add-Blog' className=" bg-red-600 px-3 py-2 rounded-md text-yellow-100 hover:bg-red-800 ">Add Blog</Link>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {
            blogs.map(blog => 
            <div key={blog._id} className="bg-slate-50 mt-3  m-auto p-3 rounded-md">
              
              <h1 className="text-2xl mb-4 font-bold text-gray-800 ">{blog.title}</h1>
              <div className="mb-4">
                <img className="rounded-md" src={blog.image} alt="" />
              </div>
              <div
               dangerouslySetInnerHTML={{__html: blog.content}}
              >

              </div>
              { singleUser?.role === 'admin' && 
                <div className="space-x-4 mt-4">
                  <button onClick={() =>handelDeleteBloge(blog._id) }  className=" bg-red-600 px-3 py-1 rounded-md text-yellow-100 hover:bg-red-800 ">delete <MdDeleteForever className="inline-flex -mt-1 "></MdDeleteForever></button>

                  <button className=" bg-red-600 px-3 py-1 rounded-md text-yellow-100 hover:bg-red-800 ">Edit <FaEdit className="inline-flex -mt-1 ml-1"></FaEdit></button>
                  { blog.status === 'publish' ?  
                  <button onClick={()=>handelUnPublish(blog._id)} className=" bg-red-600 px-3 py-1 rounded-md text-yellow-100 hover:bg-red-800 ">Unpublish <MdOutlineUnpublished className="inline-flex -mt-1 "></MdOutlineUnpublished></button> 
                  :
                  <><button onClick={()=>handelPublish(blog._id)} className=" bg-green-600 px-3 py-1 rounded-md text-yellow-100 hover:bg-green-800 ">Publish <MdPublishedWithChanges className="inline-flex -mt-1 "></MdPublishedWithChanges></button></>}
              </div>}
            </div>)
          }
        </div>
        
    </div>
  );
};

export default ContantManagement;

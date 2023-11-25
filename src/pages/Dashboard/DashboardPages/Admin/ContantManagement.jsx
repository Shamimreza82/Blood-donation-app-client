import React from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useUserInfo from "../../../../Hooks/useUserInfo";
import Swal from "sweetalert2";

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


  return (
    <div>
        <div className="flex justify-end">
            <Link to='/dashboard/contentManagement/add-Blog' className="btn bg-red-600 px-3 py-2 rounded-md text-yellow-100 hover:bg-red-800 ">Add Blog</Link>
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
              { singleUser?.role === 'admin' && <div className="space-x-4">
                  <button onClick={() =>handelDeleteBloge(blog._id) }  className="btn bg-red-600 px-3 py-2 rounded-md text-yellow-100 hover:bg-red-800 ">delete</button>
                  <button className="btn bg-red-600 px-3 py-2 rounded-md text-yellow-100 hover:bg-red-800 ">Edit</button>
              </div>}
            </div>)
          }
        </div>
        
    </div>
  );
};

export default ContantManagement;

import React from "react";
import Navber2 from "../Navber/Navber2";
import logo1 from "../../assets/images/1 (1).jpg";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const Blog = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data: blogs = [], refetch } = useQuery({
    queryKey: ["donation", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get("/blog");
      return await res.data;
    },
  });
  console.log(blogs);

  return (
    <div>
      <Navber2></Navber2>
      <div
        className="h-80"
        style={{ backgroundImage: `url('${logo1}')`, backgroundSize: "cover" }}
      >
        <div className="max-w-7xl m-auto">
          <div className="max-w-7xl  m-auto pt-40 pl-6">
            <h1 className="text-3xl font-bold text-slate-800">Blogs</h1>
            <p>Saving Lives Drop by Drop: The Blood Donation Chronicles.</p>
          </div>
          <div className="mt-3 ml-6 text-red-600 underline font-bold hover:scale-105 hover:duration-300 ">
            <Link to="/">
              {" "}
              <FaArrowLeft className="inline-flex "></FaArrowLeft> Back to home
            </Link>
          </div>
        </div>
        <div>
          {/* <button className='flex '>Publish Your a blog</button> */}
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-12">
                {blogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="p-12 md:w-1/2 flex flex-col items-start"
                  >
                    <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                      CATEGORY
                    </span>
                    <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                      {blog.title}
                    </h2>
                    <img className=" rounded-md" src={blog.image} alt="" />
                    <div
                      className="leading-relaxed mb-8 mt-3"
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    ></div>
                    <div className="">
                    <div className="flex items-center md:gap-80 flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                      <a className="text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                     <div className="ml-10">
                     <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        6
                      </span>
                     </div>
                    </div>
                    <a className="inline-flex items-center">
                      <img
                        alt="blog"
                        src={blog.userImage}
                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-gray-900">
                          {blog.name}
                        </span>
                      </span>
                    </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog;

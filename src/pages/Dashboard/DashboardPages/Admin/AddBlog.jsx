import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { useForm } from "react-hook-form";
import { imageUplode } from "../../../../api/ultis";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useUserInfo from "../../../../Hooks/useUserInfo";

const AddBlog = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [singleUser] = useUserInfo();
  console.log(singleUser);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const title = data.title;
    const image = data.image[0];

    const result = await imageUplode(image);

    const blogPost = {
      title: title,
      name: singleUser?.Name,
      userImage: singleUser?.image,
      content: content,
      date: new Date(),
      image: result?.data?.display_url,
      status: "draft",
    };

    const res = await axiosSecure.post("/blog", blogPost);
    console.log(res.data);
    if (res.data.acknowledged) {
      toast.success("blog Add successfull");
      navigate("/dashboard/contentManagement");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="md:w-[70%] m-auto">
        <div className=" font-bold text-gray-700 mb-6">
          <h1 className="text-3xl">New Blog Post Entry</h1>
          <p>Kindly provide clearly the following information.</p>
        </div>
        { singleUser.role === 'donor' && <div role="alert" className="alert alert-warning mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>Warning: Your blog will be posted only when the admin publishes the blog.</span>
        </div>}
        <form
          onSubmit={handleSubmit(onSubmit)}
          action="#"
          method="POST"
          className="space-y-6"
        >
          <div>
            <div>
              <label className="block text-sm font-medium text-neutral-600 ">
                {" "}
                Blog Titel
              </label>
              <div className="mt-1 w-full">
                <input
                  id="email"
                  name="title"
                  {...register("title")}
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
              onBlur={(newContent) => setContent(newContent)}
              onChange={(newContent) => setContent(newContent)}
            ></JoditEditor>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-600 py-2">
              {" "}
              Upload Image
            </label>
            <input
              {...register("image")}
              type="file"
              name="image"
              id=""
              className="bg-gray-100 py-2 pl-2 rounded-md"
            />
          </div>

          <div>
            <button
              type="submit"
              className="flex items-center justify-center  px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-red-600 rounded-xl hover:bg--700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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

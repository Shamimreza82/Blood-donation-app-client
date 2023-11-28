import { Link } from "react-router-dom";
import useUserInfo from "../../../Hooks/useUserInfo";
import { Helmet } from "react-helmet";

const Profile = () => {
  const [singleUser] = useUserInfo();

  return (
    <div className="flex justify-center items-center md:h-screen">
      <Helmet>
        <title>Life Lines | Dashboard | Profile</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-2xl md:w-3/5 w-full">
        <img
          alt="profile"
          src="https://images.unsplash.com/photo-1524721696987-b9527df9e512?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full mb-4 rounded-t-lg h-36"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={singleUser?.image}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          <p className="mt-2 text-xl font-medium text-gray-800 ">
            {singleUser?.role}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="md:flex justify-around ">
              <div>
                <p className="flex flex-col">Name: </p>
                <span className="font-bold text-gray-800 ">
                  {singleUser?.Name}
                </span>
              </div>
              <div>
                <p className="flex flex-col">Email:</p>
                <span className="font-bold text-gray-800 ">
                  {singleUser?.email}
                </span>
              </div>
              <p className="flex flex-col">
                Blood Group
                <span className="font-bold text-gray-800">
                  {singleUser?.bloodGroup}
                </span>
              </p>
            </div>
            <div className="md:flex gap-10 md:ml-12 mt-5">
              <p className="flex flex-col">
                District:
                <span className="font-bold text-gray-800">
                  {singleUser?.district}
                </span>
              </p>
              <p className="flex flex-col">
                Upazila:
                <span className="font-bold text-gray-800">
                  {singleUser?.upazilia}
                </span>
              </p>
            </div>
            <div className="flex justify-center my-3">
              <Link
                to={`/dashboard/updateUser/${singleUser._id}`}
                className="bg-red-500 px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1"
              >
                Update Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

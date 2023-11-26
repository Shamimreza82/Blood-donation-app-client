import { FaUsers } from "react-icons/fa";
import { BiDonateBlood } from "react-icons/bi";
import { RiRefund2Fill } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const AdminHome = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure()
    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ["allusers"],
        queryFn: async () => {
          const res = await axiosPublic.get("/users");
          return res.data;
        },
      });

      const {data: allDonation =[], } = useQuery({
        queryKey: ["allDonation"], 
        queryFn: async () => {
            const res = await axiosSecure.get('/donationRequest')
            return res.data 
        }
    })



  return (
    <div>
      <h1 className="text-center text-3xl py-5 font-bold">Welcome</h1>
      <hr />
      <div className="mt-7">
        <div className=" flex justify-around ">
          <div className="p-4 flex justify-center items-center gap-10 bg-white shadow-lg rounded-2xl ">
            <div className="items-center justify-center w-full">
              <span className="relative bg-red-100/60 py-3 rounded-xl flex justify-center mt-6">
                <FaUsers className="text-4xl text-red-500"></FaUsers>
              </span>
              <p className=" text-black font-bold text-md dark:text-red-600">Total User</p>
            </div>
            <div className="flex flex-col justify-start">
              <p className="my-4 text-4xl font-bold text-left text-gray-700 ">
                {allUsers.length}
                <span className="text-sm"></span>
              </p>
            </div>
          </div>

          <div className="p-4 flex justify-center items-center gap-10 bg-white shadow-lg rounded-2xl ">
            <div className="items-center justify-center w-full">
              <span className="relative bg-red-100/60 py-3 rounded-xl flex justify-center mt-6">
                <BiDonateBlood className="text-4xl text-red-500"></BiDonateBlood>
              </span>
              <p className=" text-black font-bold text-md dark:text-red-600">Total Donation Request</p>
            </div>
            <div className="flex flex-col justify-start">
              <p className="my-4 text-4xl font-bold text-left text-gray-700 ">
                {allDonation.length}
                <span className="text-sm"></span>
              </p>
            </div>
          </div>

          <div className="p-4 flex justify-center items-center gap-10 bg-white shadow-lg rounded-2xl ">
            <div className="items-center justify-center w-full">
              <span className="relative bg-red-100/60 py-3 rounded-xl flex justify-center mt-6">
                <RiRefund2Fill className="text-4xl text-red-500"></RiRefund2Fill>
              </span>
              <p className=" text-black font-bold text-md dark:text-red-600">Total Total Funding</p>
            </div>
            <div className="flex flex-col justify-start">
              <p className="my-4 text-4xl font-bold text-left text-gray-700 ">
                34,500
                <span className="text-sm">$</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;

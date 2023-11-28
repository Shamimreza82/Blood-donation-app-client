import { FaUsers } from "react-icons/fa";
import { BiDonateBlood } from "react-icons/bi";
import { RiRefund2Fill } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";

const AdminHome = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["allusers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });

  const { data: allDonation = [] } = useQuery({
    queryKey: ["allDonation"],
    queryFn: async () => {
      const res = await axiosSecure.get("/donationRequest");
      return res.data;
    },
  });

  const { data: totalDonation = [] } = useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payment");
      return res.data;
    },
  });

  console.log(totalDonation);

  return (
    <div>
      <Helmet>
        <title>Life Lines | Dashboard | Home</title>
      </Helmet>
      <h1 className="text-center text-3xl py-5 font-bold">Welcome</h1>
      <hr />
      <div className="mt-7 md:w-[80%] m-auto">
        <div className=" grid md:grid-cols-3 gap-5">
          <div className="relative overflow-hidden bg-green-100/60 rounded-lg shadow pt-4">
            <FaUsers className="absolute w-24 h-24 rounded-full opacity-50 right-5 top-5 text-green-600"></FaUsers>
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm font-medium leading-5 text-green-500 truncate">
                  Total users
                </dt>
                <dd className="mt-1 text-3xl font-semibold leading-9 text-gray-900">
                  {allUsers.length}
                </dd>

              </dl>
            </div>
          </div>

          <div className="relative overflow-hidden bg-green-100/60 rounded-lg shadow pt-4">
            <BiDonateBlood className="absolute w-24 h-24 rounded-full opacity-50 right-5 top-5 text-green-600 "></BiDonateBlood>

            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm font-medium leading-5 text-green-500 truncate">
                  Total Donation Request
                </dt>
                <dd className="mt-1 text-3xl font-semibold leading-9 text-gray-900">
                  {allDonation.length}
                </dd>

              </dl>
            </div>
          </div>

          <div className="relative overflow-hidden bg-green-100/60 rounded-lg shadow pt-4">
            <RiRefund2Fill className="absolute w-24 h-24 rounded-full opacity-50 right-5 top-5 text-green-600 "></RiRefund2Fill>

            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm font-medium leading-5 text-green-500 truncate">
                  Total Foundings
                </dt>
                <dd className="mt-1 text-3xl font-semibold leading-9 text-gray-900">
                  {totalDonation.price} $
                </dd>

              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;

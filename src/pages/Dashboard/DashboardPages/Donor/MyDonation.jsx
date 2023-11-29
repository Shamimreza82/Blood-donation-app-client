import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useUserInfo from "../../../../Hooks/useUserInfo";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import toast from "react-hot-toast";

const MyDonation = () => {
  const axiosSecure = useAxiosSecure();
  const [singleUser] = useUserInfo();
  console.log(singleUser?.email);



  const { data: myDonation = [], refetch } = useQuery({
    queryKey: ["donation", singleUser?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myDonation/${singleUser?.email}`);
      return await res.data;
    },
  });
  console.log(myDonation);

  const handelCanceled = async (id) => {
    const status = "pending"
    const res = await axiosSecure.put(`/donationRequest/${id}`, {status: status} )
    console.log(res.data);
    toast.success('Canceled Success')
    refetch()
  };

  return (
    <div>
      My Donation Request
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex items-center gap-x-3">
                        <span className="text-gray-600 font-bold">
                          Recipient Name
                        </span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <button className="flex items-center gap-x-2">
                        <span className="text-gray-600 font-bold">
                          Location
                        </span>

                        <svg
                          className="h-3"
                          viewBox="0 0 10 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="0.1"
                          />
                          <path
                            d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="0.1"
                          />
                          <path
                            d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="0.3"
                          />
                        </svg>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <button className="flex items-center gap-x-2">
                        <span className="text-gray-600 font-bold">
                          Donation Date
                        </span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                          />
                        </svg>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 dark:text-gray-600"
                    >
                      Donation Time
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 dark:text-gray-600"
                    >
                      Donation Status
                    </th>
                    
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-300 ">
                  {myDonation.map((donation) => (
                    <tr key={donation._id}>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <div className="flex items-center gap-x-2">
                            <h1>{myDonation?.recipientName}</h1>
                            <div>
                              <p className="text-base font-bold text-gray-00 dark:text-gray-700">
                                {donation.recipientName}
                              </p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 ">
                          <h2 className="text-sm font-normal text-emerald-500">
                            {donation.district}, {donation.upazila}
                          </h2>
                        </div>
                      </td>
                      <td className=" py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-100/60 ">
                          <h2 className="text-sm font-normal text-red-500">
                            {donation.date}
                          </h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-900 whitespace-nowrap">
                        {donation.time}
                      </td>
                      <td className=" py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-100/60 ">
                          <h2 className="text-sm font-normal text-red-500">
                            {donation.status}
                          </h2>
                        </div>
                      </td>
                      {donation.status === 'pending' && <td className=" py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-500 hover:bg-red-600">
                            <Link
                              to={`/dashboard/contentManagement/detailsDonationRequest/${donation._id}`}
                              className="text-sm font-normal text-white"
                            >
                              View
                            </Link>
                          </div>
                        </td>}
                      { donation.status === 'inprogress' && <td className=" py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <button>
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-green-500 hover:bg-green-700">
                            <h2 className="text-sm font-normal text-white">
                              Done
                            </h2>
                          </div>
                        </button>
                      </td>}
                      { donation.status === 'inprogress' && <td className=" py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div
                          onClick={() => handelCanceled(donation._id)}
                          className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-500 hover:bg-red-700"
                        >
                          <h2 className="text-sm font-normal text-white cursor-pointer">
                            Canceled
                          </h2>
                        </div>
                      </td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDonation;

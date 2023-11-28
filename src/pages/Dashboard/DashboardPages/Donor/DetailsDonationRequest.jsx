import { useLoaderData, useNavigate } from "react-router-dom";
import useUserInfo from "../../../../Hooks/useUserInfo";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet";

const DetailsDonationRequest = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const request = useLoaderData();
  console.log(request);
  const [singleUser] = useUserInfo();

  const handelConfirm = async (id) => {
    const status = "inprogress";
    const res = await axiosPublic.put(`/donationRequest/${id}`, {
      status: status,
      myDonation: singleUser?.email,
    });
    console.log(res.data.modifiedCount);
    if (res.data.modifiedCount > 0) {
      navigate("/dashboard/myDonation");
    }
    // refetch()
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <Helmet>
        <title>Life Lines | Details Donation Request</title>
      </Helmet>
      <div className="space-y-2  p-10 rounded-md">
        <div className="max-w-2xl overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex items-center gap-3">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={request.requesterImage} />
              </div>
            </div>
            <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
            {request.requsterName}
            </h3>
            <p className="max-w-2xl mt-1 text-sm text-gray-500">
              {request.requesterEmail}
            </p>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Recipient Name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {request.recipientName}
                </dd>
              </div>
              <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Hospital Name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {request.hospitalName}
                </dd>
              </div>
              <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Date</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {request.date}
                </dd>
              </div>
              <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Time</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {request.time}
                </dd>
              </div>
              <div className="px-4 py-5 bg-gray-50  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">District</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {request.district}
                </dd>
              </div>
              <div className="px-4 py-5 bg-gray-50  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Upazila</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {request.upazila}
                </dd>
              </div>
              <div className="px-4 py-5 bg-gray-50  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {request.address}
                </dd>
              </div>
              <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Requster text:
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {request.text}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <button
          className="btn btn-sm bg-red-500 text-white"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Donate
        </button>
        <dialog id="my_modal_3" className="modal ">
          <div className="modal-box ">
            <div>
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div className="bg-slate-50 rounded-3xl p-4">
                <h3 className="font-bold text-lg">
                  <span className="text-gray-500">Donor Name: </span>{" "}
                  {singleUser.Name}
                </h3>
                <h3 className="font-bold text-lg">
                  <span className="text-gray-500">Email: </span>{" "}
                  {singleUser.email}
                </h3>
              </div>
              <button className="btn btn-sm btn-circle btn-ghost "></button>
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button
                  onClick={() => handelConfirm(request._id)}
                  className="btn btn-sm bg-red-500 text-white"
                >
                  Confirm
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default DetailsDonationRequest;

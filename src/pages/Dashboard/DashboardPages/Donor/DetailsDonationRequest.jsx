import { useLoaderData } from "react-router-dom";
import useUserInfo from "../../../../Hooks/useUserInfo";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet";

const DetailsDonationRequest = () => {
  const axiosPublic = useAxiosPublic();
  const request = useLoaderData();
  console.log(request);
  const [singleUser] = useUserInfo();

  const handelConfirm = async (id) => {
    const status = "inprogress";
    const res = await axiosPublic.put(`/donationRequest/${id}`, {
      status: status,
    });
    console.log(res.data);
    // refetch()
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <Helmet>
        <title>Life Lines | Details Donation Request</title>
      </Helmet>
      <div className="space-y-2 bg-slate-100 p-10 rounded-md">
        <h1 className="text-xl ">
          Recipient Name:{" "}
          <span className="font-bold">{request.recipientName}</span>
        </h1>
        <h1 className="text-xl ">
          Hospital Name:{" "}
          <span className="font-bold">{request.hospitalName}</span>
        </h1>
        <h1 className="text-xl ">
          Date: <span className="font-bold">{request.date}</span>
        </h1>
        <h1 className="text-xl ">
          Time: <span className="font-bold">{request.time}</span>
        </h1>
        <div className="flex gap-5">
          <h1>District: {request.district}</h1>
          <h1>upazila: {request.upazila}</h1>
        </div>
        <div className="w-1/2">
          <h1 className="text-base bg-slate-100 py-3">
            Requiter Text: {request.text}
          </h1>
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

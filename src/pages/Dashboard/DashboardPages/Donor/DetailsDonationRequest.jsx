
import { useLoaderData } from "react-router-dom";
import useUserInfo from "../../../../Hooks/useUserInfo";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";


const DetailsDonationRequest = () => {
    const axiosPublic = useAxiosPublic();
  const request = useLoaderData();
  console.log(request);
  const [singleUser] = useUserInfo()

  const handelConfirm = async (id) => {
    const status = 'inprogress'
    const res = await axiosPublic.put(`/donationRequest/${id}`, {status: status} )
    console.log(res.data);
    // refetch() 
  }
  return (
    <div>
      <div>
        <h1 className="text-2xl">Recipient Name: {request.recipientName}</h1>
        <h1 className="text-2xl">Recipient Name: {request.hospitalName}</h1>
        <h1 className="text-2xl">Recipient Name: {request.recipientName}</h1>
        <h1 className="text-2xl">Recipient Name: {request.text}</h1>
        <h1>{request.time}</h1>
        <h1>{request.date}</h1>
        <h1>district:{request.district}</h1>
     
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Donate
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg"><span className="text-gray-500">Donor Name: </span> {singleUser.Name}</h3>
            <h3 className="font-bold text-lg"><span className="text-gray-500">Email: </span> {singleUser.email}</h3>
            <button className="btn btn-sm btn-circle btn-ghost "></button>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={()=>handelConfirm(request._id)} className="btn">
                Confirm
              </button>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default DetailsDonationRequest;

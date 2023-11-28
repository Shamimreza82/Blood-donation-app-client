import React, { useEffect, useState } from "react";


import { useLoaderData, useNavigate, useParams } from "react-router-dom";

import toast from "react-hot-toast";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAuth from "../../../../Hooks/useAuth";
import useUserInfo from "../../../../Hooks/useUserInfo";
import { Helmet } from "react-helmet";

const CreateDonationUpdate= () => {
    const singeluserData = useLoaderData()
    const {id} = useParams()
     const navigate = useNavigate();
    const [singleUser] = useUserInfo()
    const {user} = useAuth();
    const [district, setdistrict] = useState([]);
    const [upValue, SetDUpValue] = useState([])
    const [upValue2, SetDUpValue2] = useState('')
    const [bloodGroup, setBloodgroup] = useState("");
    const [distValue, SetDistValue] = useState('')
 

    const axiosPublic = useAxiosPublic()
    console.log(singeluserData);

    useEffect(() => {
           axiosPublic('/dist')
          .then(res => {
          const names = res.data.map((name) => name.name);
          setdistrict(names )
        });
    }, [axiosPublic]);
  
    useEffect(() => {
           axiosPublic('/upazi')
          .then(res => {
          const names = res.data.map((name) => name.name);
          SetDUpValue(names )
        });
    }, [axiosPublic]);







  const handelDonationRequst = async (e) => {
    e.preventDefault();

    const form = e.target
    
    const recipientName = form.recipientName.value
    const hospitalName = form.hospitalName.value
    const date = form.date.value
    const time = form.time.value
    const address = form.address.value
    const text= form.text.value

    // console.log(recipientName, hospitalName, date, time, address, text);
    const donationRequst = {
        requsterName: singleUser?.Name, 
        requesterEmail: singleUser?.email, 
        requesterImage: singleUser?.image, 
        recipientName, 
        hospitalName, 
        date, 
        time, 
        district: distValue,
        upazila: upValue2,
        address, 
        text, 
        status: 'pending'
    }

    console.log(donationRequst);
        const res = await axiosPublic.put(`/donationRequest/${id}`, donationRequst )
        console.log(res.data)
        if(res.data.modifiedCount === 1){
          toast.success("Update Successfull");
              navigate('/dashboard/myDonationRequest')
        }
  };







  return (
    <div className="h-screen bg-slate-100">
      <Helmet>
                <title>Life Lines | Dashboard | Update Donation Request</title>
            </Helmet>
      <section className="bg-white ">
        <div className="flex justify-center min-h-screen">
          <div
            className="hidden bg-cover lg:block "
          ></div>

          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 ">
            <div className="w-full">
              <h1 className="text-3xl pb-8 text-center font-bold tracking-wider text-red-600 capitalize ">
               Update Donation Request
              </h1>



              <form
                onSubmit={handelDonationRequst}
              >
                <div className="grid grid-cols-1 gap-2 mt-2 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Requester Name
                    </label>
                    <input
                      defaultValue={singleUser?.Name}
                      readOnly
                      type="text"
                      placeholder="John"
                      className="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:text-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Requester Email
                    </label>
                    <input
                      type="text"
                      defaultValue={singleUser?.email}
                      readOnly
                      placeholder="Snow"
                      className="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:text-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Recipient Name
                    </label>
                    <input
                      type="text"
                      defaultValue={singeluserData.recipientName}
                      name="recipientName"
                      placeholder="Recipient Name"
                      className="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:text-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Hospital Name
                    </label>
                    <input
                      type="text"
                      defaultValue={singeluserData.hospitalName}
                      name="hospitalName"
                      placeholder="Hospital Name"
                      className="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:text-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Donation Date
                    </label>
                    <input
                      type="date"
                      defaultValue={singeluserData.date}
                      name="date"
                      placeholder="Date"
                      className="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:text-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Donation Time
                    </label>
                    <input
                      type="time"
                      defaultValue={singeluserData.time}
                      name="time"
                      placeholder="Time"
                      className="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:text-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 ">
                      District
                    </label>
                    <select onChange={(e) => SetDistValue(e.target.value)} className="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                        {
                        district.map(items => <option key={items}  value={items}>{items}</option> )
                        }
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Upazila
                    </label>
                    <select onChange={(e) => SetDUpValue2(e.target.value)} className="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                        {
                        upValue?.map((items, idx) => <option key={idx} value={items}>{items}</option> )
                      }
                    </select>
                  </div>
                </div>
                <div>
                    <label className="block mb-2 text-sm mt-3 text-gray-600 ">
                      Full Address
                    </label>
                    <textarea
                      type="text"
                      defaultValue={singeluserData.address}
                      name="address"
                      placeholder="Address"
                      className="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:text-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                <div>
                    <label className="block mb-2 mt-3 text-sm text-gray-600 ">
                      Requester Text
                    </label>
                    <textarea
                      type="text"
                      defaultValue={singeluserData.text}
                      name="text"
                      placeholder="Text"
                      className="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:text-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                <button className="flex items-center justify-between  px-6 mt-4 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    <span>Request</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 rtl:-scale-x-100"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateDonationUpdate;

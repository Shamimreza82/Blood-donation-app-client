import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import useUserInfo from "../../Hooks/useUserInfo";
import toast from "react-hot-toast";
import { IoArrowBackOutline } from "react-icons/io5";
import { Helmet } from "react-helmet";

const DonationRequst = () => {
  const navigate = useNavigate();
  const [singleUser] = useUserInfo();
  const [district, setdistrict] = useState([]);
  const [upValue, SetDUpValue] = useState([]);
  const [upValue2, SetDUpValue2] = useState("");
  const [bloodGroup, setBloodgroup] = useState("");
  const [distValue, SetDistValue] = useState("");

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic("/dist").then((res) => {
      const names = res.data.map((name) => name.name);
      setdistrict(names);
    });
  }, [axiosPublic]);

  useEffect(() => {
    axiosPublic("/upazi").then((res) => {
      const names = res.data.map((name) => name.name);
      SetDUpValue(names);
    });
  }, [axiosPublic]);

  const handelDonationRequst = async (e) => {
    e.preventDefault();

    const form = e.target;

    const recipientName = form.recipientName.value;
    const hospitalName = form.hospitalName.value;
    const date = form.date.value;
    const time = form.time.value;
    const address = form.address.value;
    const text = form.text.value;

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
      status: "pending",
    };

    console.log(donationRequst);
    const res = await axiosPublic.post("/donationRequest", donationRequst);
    console.log(res.data);
    if (res.data.acknowledged) {
      toast.success("Requst Successfull");
      navigate("/");
    }
  };

  return (
    <div className="h-screen bg-slate-100">
      <Helmet>
        <title>Life Lines | Donation Request</title>
      </Helmet>
      <section className="bg-white relative ">
        <div className="text-right absolute mt-2 md:right-10 md:top-6 right-0 bg-slate-100 py-1 px-3 rounded-full underline hover:-translate-x-3 duration-300 text-red-600">
          <Link to="/" className="text-right ">
            <IoArrowBackOutline className="inline-flex -mt-0 mr-1"></IoArrowBackOutline>
            Back Home
          </Link>{" "}
        </div>
        <div className="flex justify-center md:min-h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/5"
            style={{
              backgroundImage: `url('${"https://images.unsplash.com/photo-1615461066159-fea0960485d5?q=80&w=1616&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}')`,
              backgroundPosition: "center",
            }}
          ></div>

          <div className="flex items-center w-full max-w-3xl md:p-8 mt-8 mx-auto lg:px-12 lg:w-3/5 px-3 ">
            <div className="w-full">
              <h1 className="md:text-3xl text-lg font-bold tracking-wider text-red-600 capitalize ">
                Donation Request
              </h1>

              <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm">
                Let’s get you all set up so you can verify your personal account
                and begin setting up your profile.
              </p>

              <form onSubmit={handelDonationRequst}>
                <div className="grid grid-cols-1 md:gap-6 gap-2 mt-2 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Requester Name
                    </label>
                    <input
                      defaultValue={singleUser?.Name}
                      readOnly
                      type="text"
                      placeholder="John"
                      className="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:text-gray-900 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
                      className="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:text-gray-900 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Recipient Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="recipientName"
                      required
                      placeholder="Recipient Name"
                      className="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:text-gray-900 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Hospital Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="hospitalName"
                      required
                      placeholder="Hospital Name"
                      className="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:text-gray-900 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Donation Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      name="date"
                      placeholder="Date"
                      className="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:text-gray-900 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Donation Time<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="time"
                      required
                      name="time"
                      placeholder="Time"
                      className="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:text-gray-900 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 ">
                      District<span className="text-red-500">*</span>
                    </label>
                    <select
                      onChange={(e) => SetDistValue(e.target.value)}
                      className="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:text-gray-900 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    >
                      {district.map((items) => (
                        <option key={items} value={items}>
                          {items}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Upazila<span className="text-red-500">*</span>
                    </label>
                    <select
                      onChange={(e) => SetDUpValue2(e.target.value)}
                      className="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:text-gray-900 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    >
                      {upValue?.map((items, idx) => (
                        <option key={idx} value={items}>
                          {items}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm mt-3 text-gray-600 ">
                    Full Address<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    type="text"
                    required
                    name="address"
                    placeholder="Address"
                    className="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:text-gray-900 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label className="block mb-2 mt-3 text-sm text-gray-600 ">
                    Requester Text<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    type="text"
                    name="text"
                    required
                    placeholder="Text"
                    className="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:text-gray-900 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                {singleUser.status === "block" ? (
                  <button disabled className="btn mt-4">
                    Request
                  </button>
                ) : (
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
                )}
                {singleUser.status === "block" && (
                  <div role="alert" className="alert alert-error mt-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current shrink-0 h-6 w-6 animate-bounce"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>You are not authorized to request by admin</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationRequst;

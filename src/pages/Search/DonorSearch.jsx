import React, { useEffect, useState } from "react";
import Navber2 from "../Navber/Navber2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link, useNavigate } from "react-router-dom";
import { GiJoin } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import Loeading from "../../component/Loeading/Loeading";
import { Helmet } from "react-helmet";

const DonorSearch = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [district, setdistrict] = useState([]);
  const [upValue, SetDUpValue] = useState([]);
  const [upValue2, SetDUpValue2] = useState("");
  const [bloodGroup, setBloodgroup] = useState("");
  const [distValue, SetDistValue] = useState("");
  const [donor, setDonor] = useState([]);

  console.log(donor);

  console.log(upValue2, bloodGroup, distValue);

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

  // bloodGroup
  // "AB+"
  // district
  // "Joypurhat"
  // upazilia
  // "Lalmai"

  const handelSearchDonor = async () => {
    const donor = {
      bloodGroup: bloodGroup,
      district: distValue,
      upazilia: upValue2,
    };

    console.log("sert");
    const res = await axiosPublic.post("/searchDonor", donor);
    console.log(res.data);
    setDonor(res.data);
  };

  return (
    <div>
      <Navber2></Navber2>
      <Helmet>
        <title>Life Lines | Search Donor </title>
      </Helmet>

      <div className="max-w-7xl m-auto md:pt-40 mt-4 ">
        <div className="mt-3 ml-6 text-red-600 underline font-bold hover:scale-105 hover:duration-300 ">
          <Link to="/">
            {" "}
            <FaArrowLeft className="inline-flex "></FaArrowLeft> Back to home
          </Link>
        </div>
        <hr className="mt-3" />

        <h1 className="md:py-6 text-center text-2xl">Search Donor</h1>
        <hr />
        <div className="mt-5 md:flex gap-7 px-3">
          <div>
            <label>Blood Group</label>
            <select
              name=""
              id=""
              onChange={(e) => setBloodgroup(e.target.value)}
              className="border px-4 py-2 rounded-md w-full"
            >
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div>
            <label>Select Distect</label>
            <select
              name=""
              id=""
              onChange={(e) => SetDistValue(e.target.value)}
              className="border px-4 py-2 rounded-md w-full"
            >
              {district.map((items) => (
                <option key={items} value={items}>
                  {items}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Select Upzila</label>
            <select
              name=""
              id=""
              onChange={(e) => SetDUpValue2(e.target.value)}
              className="border px-4 py-2 rounded-md w-full"
            >
              {upValue?.map((items, idx) => (
                <option key={idx} value={items}>
                  {items}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          onClick={handelSearchDonor}
          className="block  hover:scale-95 duration-200 w-full rounded my-5 bg-red-600 px-10 py-2 text-base font-medium text-white shadow hover:bg-red-800 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Search Doner
          <IoSearch className="inline-flex ml-2 text-lg "></IoSearch>
        </button>

        <hr />
      </div>
      <div className="md:w-[70%] m-auto mt-7 overflow-x-auto">
        <div className="overflow-x-auto">
        <div className="flex justify-center items-center md:my-8">
              {donor == false && (
                <div className="" >
                  {" "}
                  <div role="alert" className="alert alert-warning">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current shrink-0 h-6 w-6 animate-ping"
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
                    <span>
                      No data was found with the information you searched for.
                      Please select another option to search
                    </span>
                  </div>
                </div>
              )}
              </div>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Sl</th>
                <th>Name</th>
                <th>Email</th>
                <th>Location</th>
                <th>Blood Group</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
             

              {donor?.map((search, idx) => (
                <tr key={search._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={search.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{search.Name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{search.email}</td>
                  <td>
                    District: {search.district} <br />
                    Upazilia: {search.upazilia}
                  </td>
                  <th>
                    <button className="btn btn-ghost btn-xs">
                      {search.bloodGroup}
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DonorSearch;

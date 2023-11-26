import React, { useEffect, useState } from "react";
import Navber2 from "../Navber/Navber2";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link, useNavigate } from "react-router-dom";
import { GiJoin } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import Loeading from "../../component/Loeading/Loeading";

const DonorSearch = () => {
  const navigate = useNavigate();
  const { user, createUser } = useAuth();
  const [district, setdistrict] = useState([]);
  const [upValue, SetDUpValue] = useState([]);
  const [upValue2, SetDUpValue2] = useState("");
  const [bloodGroup, setBloodgroup] = useState("");
  const [distValue, SetDistValue] = useState("");
  const [image, setimage] = useState("");

  console.log(image);
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

  return (
    <div>
      <Navber2></Navber2>

      <div className="max-w-7xl m-auto pt-40 ">
        <div className="mt-3 ml-6 text-red-600 underline font-bold hover:scale-105 hover:duration-300 ">
          <Link to="/">
            {" "}
            <FaArrowLeft className="inline-flex "></FaArrowLeft> Back to home
          </Link>
        </div>
        <hr className="mt-3" />
        <h1 className="py-6 text-2xl">Search Doner</h1>

        <hr />
        <div className="mt-5 md:flex gap-7 px-3">
          <div>
            <label>Blood Group</label>
            <select
              name=""
              id=""
              className="border px-4 py-4 rounded-md w-full"
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
              className="border px-4 py-4 rounded-md w-full"
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
              className="border px-4 py-4 rounded-md w-full"
            >
              {upValue?.map((items, idx) => (
                <option key={idx} value={items}>
                  {items}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="border px-4 py-4 rounded-md w-full"
            />
          </div>
        </div>
        <button
          to="/register"
          className="block hover:scale-95 duration-200 w-full rounded my-5 bg-red-600 px-10 py-2 text-base font-medium text-white shadow hover:bg-red-800 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Search Doner
          <IoSearch className="inline-flex ml-2 text-lg "></IoSearch>
        </button>
   
        <hr />
      </div>
    </div>
  );
};

export default DonorSearch;

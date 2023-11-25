import { Link, useNavigate } from "react-router-dom";
import useUserInfo from "../../../Hooks/useUserInfo";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const [singleUser] = useUserInfo();
  const [Name, setName] = useState("");
  const [district, setdistrict] = useState([]);
  const [upValue, SetDUpValue] = useState([]);
  const [upValue2, SetDUpValue2] = useState("");
  const [bloodGroup, setBloodgroup] = useState("");
  const [distValue, SetDistValue] = useState("");
  const navigate = useNavigate();
  //   const [image, setimage] = useState('')

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

  const handelUpdateProfile = async () => {
    const updateProfile = {
      Name: Name,
      // image: uploded?.data?.display_url,
      bloodGroup: bloodGroup,
      district: distValue,
      upazilia: upValue2,
    };
    console.log(updateProfile);
    const res = await axiosPublic.put(
      `/user/${singleUser?.email}`,
      updateProfile
    );
    console.log(res.data);
    if (res.data.modifiedCount > 0) {
      toast.success("Profile Update Successful");
      navigate("/dashboard/profile");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-2xl w-3/5">
        <img
          alt="profile"
          src="https://images.unsplash.com/photo-1524721696987-b9527df9e512?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full mb-4 rounded-t-lg h-36"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={singleUser?.image}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          <p className="p-2 px-4 text-xs text-white bg-pink-500 rounded-full">
            {/* {role && role.toUpperCase()} */}
          </p>
          <p className="mt-2 text-xl font-medium text-gray-800 ">
            {singleUser?.role}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex gap-6 justify-around ">
              <div className=" flex flex-col">
                <label>Name</label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  name=""
                  defaultValue={singleUser?.Name}
                  id=""
                  required
                  className="border py-1 pl-2"
                />
              </div>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black ">
                  {singleUser?.email}
                </span>
              </p>
              <p className="flex flex-col">
                Blood Group
                <span className=" text-black ">
                  <select
                    name=""
                    id=""
                    required
                    onChange={(e) => setBloodgroup(e.target.value)}
                    className="border py-1 w-full"
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
                </span>
              </p>
            </div>
            <div className="flex gap-10 mt-5 ml-6">
              <p className="flex flex-col">
              
                <label> District:</label>
                <select
                  name=""
                  id=""
                  required
                  onChange={(e) => SetDistValue(e.target.value)}
                  className="border py-1 w-full"
                >
                  {district.map((items) => (
                    <option key={items} value={items}>
                      {items}
                    </option>
                  ))}
                </select>
              </p>
              <p className="flex flex-col">
                
                <label> Upazila:</label>
                <span className=" text-black  ">
                  <select
                    name=""
                    id=""
                    required
                    onChange={(e) => SetDUpValue2(e.target.value)}
                    className="border py-1 w-full "
                  >
                    {upValue?.map((items, idx) => (
                      <option  key={idx} value={items}>
                        {items}
                      </option>
                    ))}
                  </select>
                </span>
              </p>
             
            </div>
            <div className="flex justify-center mt-5">
              <button
                onClick={handelUpdateProfile}
                className="bg-[#F43F5E] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

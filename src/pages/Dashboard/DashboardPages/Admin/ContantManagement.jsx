import React from "react";
import { Link } from "react-router-dom";

const ContantManagement = () => {
  return (
    <div>
        <div className="flex justify-end">
            <Link to='/dashboard/contentManagement/add-Blog' className="btn bg-red-600 px-3 py-2 rounded-md text-yellow-100 hover:bg-red-800 ">Add Blog</Link>
        </div>
        
    </div>
  );
};

export default ContantManagement;

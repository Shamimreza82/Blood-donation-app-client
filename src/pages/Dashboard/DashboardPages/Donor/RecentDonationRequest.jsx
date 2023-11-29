import React from "react";
import useUserInfo from "../../../../Hooks/useUserInfo";

const RecentDonationRequest = () => {
  const [singleUser] = useUserInfo();

  return (
    <div>
      <div>
        <h1 className="text-2xl text-center">
          Welcome{" "}
          <span className="text-red-600 font-bold">{singleUser.Name}</span>
        </h1>
        <h1 className="text-center py-3 text-xl font-bold">
          Resent Donation Request
        </h1>
        <hr />
      </div>

      
    </div>
  );
};

export default RecentDonationRequest;

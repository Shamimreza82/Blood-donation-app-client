import { Helmet } from "react-helmet";
import DonerHome from "./DonerHome";


const MyDonationRequest = () => {
    return (
        <div >
            <Helmet>
                <title>Life Lines | My Donation</title>
            </Helmet>
            <DonerHome></DonerHome>
        </div>
    );
};

export default MyDonationRequest;
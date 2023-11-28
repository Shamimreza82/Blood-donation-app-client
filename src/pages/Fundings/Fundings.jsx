import { Elements } from "@stripe/react-stripe-js";
import Navber2 from "../Navber/Navber2";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUserInfo from "../../Hooks/useUserInfo";

const stripePromise = loadStripe(import.meta.env.VITE_payment_API);

const Fundings = () => {
  const axiosSecure = useAxiosSecure();
  const [singleUser] = useUserInfo();
  console.log(singleUser?.email);

  const { data: myPayment, refetch } = useQuery({
    queryKey: ["payment", singleUser?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${singleUser?.email}`);
      return res.data;
    },
  });

  console.log(myPayment);

  return (
    <div>
      <Navber2></Navber2>
      <Helmet>
        <title>Life Lines | Funding</title>
      </Helmet>
      <div className="max-w-xl m-auto">
        <hr />
        <Elements stripe={stripePromise}>
          <div className="md:pt-40">
            <CheckoutForm refetch={refetch}></CheckoutForm>
          </div>
        </Elements>
      </div>
      <div className="max-w-5xl m-auto mt-6">
        My Donation History
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Payment ID</th>
                <th>Price</th>
                <th>Payment Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {myPayment?.map((payment, idx) => (
                <tr key={payment._id}>
                  <th>{idx + 1}</th>
                  <td>{payment.email}</td>
                  <td>{payment.name}</td>
                  <td >{payment.payment_id}</td>
                  <td className="text-right">{payment.price} $</td>
                  <td>{payment.date.slice(0, 9)}</td>
                  <td className="text-green-500">Paid</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Fundings;

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUserInfo from "../../Hooks/useUserInfo";
import toast from "react-hot-toast";
import bg from "../../assets/images/1 (1).jpg";

const CheckoutForm = () => {
  const [singleUser] = useUserInfo();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [amount, setAmount] = useState("");
  const [success, setSuccess] = useState('')

  const price = parseInt(amount);
  console.log(price);

  console.log(clientSecret);

  useEffect(() => {
    if (price > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: price })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, price]);

  const handelSunmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: singleUser?.Name || "anonymous",
            email: singleUser?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log('allllll',confirmError);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        toast.success("your Donation Successful");
        const payment = {
          email: singleUser?.Name,
          name: singleUser?.email,
          date: new Date(),
          payment_id: paymentIntent.id,
          price: price,
          status: "pending",
        };
        const res = await axiosSecure.post("/payment", payment);
        console.log(res.data);
        setSuccess(`Your Payment ID: ${paymentIntent.id}`)
      } else {
        setSuccess('')
      }
     
    }
  };

  return (
    <div className="" >
        {/* style={{ backgroundImage: `url('${bg}')` }} */}
      <div>
        <div className="p-8 bg-slate-50 rounded-md ">
          <h1 className="bg-slate-50 text-2xl py-5">
            Funding Amount: <span className="text-green-600">(USD)</span>
          </h1>

          <input
            onChange={(e) => setAmount(e.target.value)}
            required
            className="border py-2 px-4 rounded-md"
            type="number"
            name=""
            id=""
            placeholder="Amount"
          />

          <form className="mt-5" onSubmit={handelSunmit}>
            <p className="py-2 font-bold text-slate-600">Card Info:</p>
            <div className="bg-slate-100 py-3 px-3">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
            </div>
            <button
              className="btn mt-7 bg-red-500 text-white "
              type="submit"
              disabled={!stripe || !clientSecret || !price}
            >
              Pay
            </button>
            <p className="text-green-500 font-bold">{success}</p>
            <div className="mt-8 text-sm text-red-600 bg-red-100/60 rounded-md py-1 pl-1">
              NOTE: For Testing only{" "}
            </div>
            <p className="text-sm"> CardNumber: 4242 4242 4242 4242</p>
            <p className="text-sm"> MM/YY: 12/24 </p>
            <p className="text-sm"> CVC: 555 </p>
            <p className="text-sm"> ZIP: 55555 </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;

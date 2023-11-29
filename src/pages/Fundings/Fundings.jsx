import { Elements } from "@stripe/react-stripe-js";
import Navber2 from "../Navber/Navber2";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUserInfo from "../../Hooks/useUserInfo";
import { useRef } from "react";
import { jsPDF } from "jspdf"; 
import html2canvas from "html2canvas";
import generatePDF, { usePDF } from "react-to-pdf";

const stripePromise = loadStripe(import.meta.env.VITE_payment_API);

const Fundings = () => {
  const axiosSecure = useAxiosSecure();
  const [singleUser] = useUserInfo();

const targetRef = useRef()

  const { data: myPayment, refetch } = useQuery({
    queryKey: ["payment", singleUser?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${singleUser?.email}`);
      return res.data;
    },
  });

  // const downloadPDF = () => {
  //   const input = document.getElementById('pdfContent'); // Replace 'pdfContent' with the ID of the element you want to convert to PDF
  //   html2canvas(input)
  //     .then((canvas) => {
  //       const imgData = canvas.toDataURL('image/png');
  //       const pdf = new jsPDF();
  //       const imgWidth = 210; // PDF page width (in mm)
  //       const imgHeight = (canvas.height * imgWidth) / canvas.width; // Adjusting height to maintain aspect ratio
  //       pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
  //       pdf.save('download.pdf');
  //     })
  //     .catch((error) => {
  //       console.error('Error generating PDF:', error);
  //     });
  // };

  // const { toPDF, targetRef } = usePDF({filename: 'page.pdf'})
  



  console.log(myPayment);

  return (
    <div className="h-screen ">
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
        <div  className="max-w-5xl m-auto mt-6" ref={targetRef} >
          My Donation History
          <div className="overflow-x-auto">
            <table className="table table-xs">
              <thead >
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
                    <td>{payment.payment_id}</td>
                    <td className="text-right">{payment.price} $</td>
                    <td>{payment.date.slice(0, 9)}</td>
                    <td className="">Paid</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
  
      </div>
    </div>
  );
};

export default Fundings;

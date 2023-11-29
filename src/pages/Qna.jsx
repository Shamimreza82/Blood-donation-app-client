import React from "react";
import bg from "../assets/images/New folder/1 (1).jpg";

const Qna = () => {
  return (
    <div
      className=" "
      style={{ backgroundImage: `url('${bg}')`, backgroundSize: "cover"}}
    >
        <h2 className="max-w-7xl m-auto pt-7 text-2xl pl-3">Answers to Your Blood Donation Queries</h2>
      <div className="space-y-3  flex  items-center max-w-7xl m-auto">
        
        <div className="space-y-3 md:py-20 py-4 md:w-[70%] px-3">
          <div className="collapse collapse-arrow bg-base-200 rounded-xl">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title md:text-xl font-medium" data-aos="zoom-in">
            Who can donate blood?
            </div>
            <div className="collapse-content">
              <p>Generally, individuals aged 18-65, in good health, meeting specific weight and health criteria, are eligible. Check our guidelines or consult a healthcare professional for specifics.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 rounded-xl">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title md:text-xl font-medium" data-aos="zoom-in">
            How often can I donate blood?
            </div>
            <div className="collapse-content">
              <p>Whole blood donors can typically donate every 56 days, while there might be different intervals for other donation types. Consult our team for personalized information.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 rounded-xl" data-aos="zoom-in">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title md:text-xl font-medium">
            Is it safe to donate blood?
            </div>
            <div className="collapse-content">
              <p>Yes, donating blood is safe. We adhere to strict health and safety standards, ensuring a sterile environment and professional care during the donation process.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 rounded-xl" data-aos="zoom-in">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title md:text-xl font-medium">
            What happens during a blood donation?
            </div>
            <div className="collapse-content">
              <p>The process is simple and typically takes around 10-15 minutes. After registration and a brief health check, a trained professional will collect the blood. Post-donation refreshments are provided.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qna;

import React from "react";
import bg from "../../assets/images/1 (1).jpg";
import bg2 from "../../assets/images/1 (2).jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <section
        className="relative bg bg-cover bg-center bg-no-repeat bri"
        style={{ backgroundImage: `url('${bg2}')`, backgroundSize: "cover" }}
      >
        {/* <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div> */}

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 ">
          <div className="max-w-xl text-center ">
            <h1 className="text-4xl font-extrabold py-2 text-left sm:text-5xl">
              Welcome to Life Lines
             
            </h1>
            <strong className="block text-6xl text-left py-1 font-extrabold text-rose-700">
                Your Platform for <br /> Saving Lives!
              </strong>
            <p className="mt-4 text-left max-w-lg sm:text-xl/relaxed">
              Become a Hero - Donate Blood, Donate Hope. Every Donation Is a
              Gift of Life. Together, Let's Create a Healthier Tomorrow!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                to="/register"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Join As a Donor
              </Link>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Search Donor
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default Banner;

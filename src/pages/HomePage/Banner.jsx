import React from "react";
import bg from "../../assets/images/1 (1).jpg";
import bg2 from "../../assets/images/1 (2).jpg";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Untitled-2.png";
import { GiJoin } from "react-icons/gi";
import { RiFindReplaceLine } from "react-icons/ri";

const Banner = () => {
  return (
    <div>
      <section
        className="relative bg bg-cover bg-center bg-no-repeat bri"
        style={{ backgroundImage: `url('${bg2}')`, backgroundSize: "cover" }}
      >
        {/* <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div> */}

        <div className="relative mx-auto max-w-screen-xl px-4 md:py-32 py-16 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 ">
          <div className="max-w-xl text-center ">
            <h1 className="md:text-4xl text-lg font-extrabold py-2 text-slate-800 text-left sm:text-5xl" data-aos="fade-down"  data-aos-duration="2000">
              Welcome to Life Lines
            </h1>
            <div className="flex items-center gap-4" data-aos="zoom-in" data-aos-duration="1000">
              <strong className="block md:text-6xl text-3xl text-left py-3 font-extrabold text-red-600 flex items-center gap-4 animate-pulse">
                Your Platform for <br /> Saving Lives!
              </strong>
              <span>
                <img className="w-6 animate-bounce " src={logo} alt="" />
              </span>
            </div>
            <p className="mt-4 text-left max-w-lg sm:text-xl/relaxed">
              Become a Hero - Donate Blood, Donate Hope. Every Donation Is a
              Gift of Life. Together, Let's Create a Healthier Tomorrow!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                to="/register"
                className="block hover:scale-95 duration-200 w-full rounded bg-red-600 px-10 py-2 text-base font-medium text-white shadow hover:bg-red-800 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Join As a Donor{" "}
                <GiJoin className="inline-flex ml-2 text-lg "></GiJoin>
              </Link>

              <Link
                to="/donorSearch"
                href="#"
                className="block w-full hover:scale-95 duration-200 rounded bg-white px-12 py-3 text-sm font-bold text-red-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                <RiFindReplaceLine className="inline-flex -mt-1 mr-2 text-lg animate-ping"></RiFindReplaceLine>{" "}
                Search Donor
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default Banner;

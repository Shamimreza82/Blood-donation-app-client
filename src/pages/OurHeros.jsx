import img1 from "../assets/images/New folder/1.jpg";
import img2 from "../assets/images/New folder/2.jpg";
import img3 from "../assets/images/New folder/3.jpg";
import img4 from "../assets/images/New folder/3.png";

const OurHeros = () => {
  return (
    <div>
      <section className="bg-white max-w-7xl m-auto">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
            Our Respected Donors
            
          </h1>
          <hr className="w-[20%] m-auto mt-2 border border-red-500 animate-ping" />
          <p className="md:w-[60%] m-auto mt-3 text-sm text-gray-600">Our respected donors, the heartbeat of our cause, are heroes in action, embodying boundless kindness. Their selfless gifts save lives, standing as pillars of hope and compassion. We honor these noble souls for their unwavering generosity.</p>
          <div className="grid grid-cols-1 md:gap-8 gap-4 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
            <div className="flex relative items-end overflow-hidden bg-cover rounded-lg md:h-96 h-48">
              <img className="absolute h-full md:w-full" src={img1} alt="" />
              <div className="w-full px-8 md:py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-700/60">
                <h2 className="md:mt-4 md:text-xl font-semibold text-gray-100 capitalize ">
                Grace Bloodworth
                </h2>
                <p className="md:mt-2 md:text-lg tracking-wider text-gray-100 uppercase ">
                  29/09/2023
                </p>
              </div>
            </div>

            <div className="flex relative items-end overflow-hidden bg-cover rounded-lg md:h-96 h-48">
              <img className="absolute h-full md:w-full" src={img2} alt="" />
              <img src="" alt="" />
              <div className="w-full px-8 md:py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-700/60">
                <h2 className="md:mt-4 md:text-xl font-semibold text-gray-100 capitalize ">
                Carter Lifespring
                </h2>
                <p className="md:mt-2 md:text-lg tracking-wider text-gray-100 uppercase ">
                  29/09/2023
                </p>
              </div>
            </div>

            <div className="flex relative items-end overflow-hidden bg-cover rounded-lg md:h-96 h-48">
              <img className="absolute h-full w-full" src={img3} alt="" />
              <div className="w-full px-8 md:py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-700/60">
                <h2 className="md:mt-4 md:text-xl font-semibold text-gray-100 capitalize ">
                Emily Redford
                </h2>
                <p className="md:mt-2 md:text-lg tracking-wider text-gray-100 uppercase ">
                  29/09/2023
                </p>
              </div>
            </div>

            <div className="flex relative items-end overflow-hidden bg-cover rounded-lg md:h-96 h-48">
              <img className="absolute h-full w-full " src={img4} alt="" />
              <div className="w-full px-8 md:py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-700/60">
                <h2 className="md:mt-4 md:text-xl font-semibold text-gray-100 capitalize ">
                Benjamin Bloodstone
                </h2>
                <p className="md:mt-2 md:text-lg tracking-wider text-gray-100 uppercase ">
                  29/09/2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurHeros;

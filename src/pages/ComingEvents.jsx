import bg from '../assets/images/22.jpg'

const ComingEvents = () => {
  return (
    <div className="bg-red-100/40 md:mt-20 md:py-12 ">
      <div className="relative px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16 max-w-7xl m-auto ">
        <h2 className="text-2xl font-semibold font-display text-black  sm:text-3xl">
          We&#x27;ve got more coming...
        </h2>
        <p className="mt-2 max-w-xl text-base text-gray-800">
          Want to hear from us when we add new components? Sign up for our
          newsletter and we&#x27;ll email you every time we release a new batch
          of components.
        </p>
        <form>
          <div className="mt-6 sm:flex jusitfy-start">
            <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
              <div className=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-Subscribe'
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="Email"
                />
              </div>
              <button
                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </form>
        <div className="absolute inset-y-0 right-0 hidden lg:block lg:left-2/3 xl:left-1/2">
          <picture>
            <img
              className="object-cover rounded-md h-full  mt-1 mx-auto maw-w-44"
              src={bg}
              alt="shopping item"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default ComingEvents;

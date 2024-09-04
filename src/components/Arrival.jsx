function Arrival() {
  return (
    <div className="container mx-auto lg:pt-12 py-6 md:mb-0 mb-[15rem]">
      <p className="text-red-700 flex items-center gap-4 lg:text-lg ">
        <span className="bg-red-700 h-8 w-3 rounded-sm"></span>
        <span className="font-semibold">Featured</span>
      </p>
      <h2 className="lg:text-4xl text-2xl font-medium lg:mt-4 lg:mb-9 mt-3 mb-7 text-center lg:text-left">
        New Arrival
      </h2>

      <div className="grid lg:grid-cols-2 lg:gap-8 gap-4 lg:my-8 text-white">
        <div
          className="relative bg-no-repeat bg-center bg-contain bg-black h-[15rem] lg:h-[30rem] rounded-xl"
          style={{ backgroundImage: "url('/images/arrival-1.png')" }}
        >
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:left-3 md:transform-none space-y-3 text-center md:text-left w-full px-4">
            <h3 className="text-2xl font-bold">PS 5</h3>
            <p className="md:text-base text-sm">
              Next-generation gaming console with stunning graphics and fast
              loading times.
            </p>
            <button className="underline">Shop now</button>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-8 h-[30rem]">
          <div
            className="relative bg-contain bg-black bg-no-repeat bg-right rounded-xl h-[15rem] lg:h-auto"
            style={{ backgroundImage: "url('/images/arrival-2.png')" }}
          >
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:left-3 md:transform-none space-y-3 text-center md:text-left w-full px-4">
              <h3 className="text-2xl font-bold">Samsung S24</h3>
              <p className="md:text-base text-sm">
                High-end smartphone with an exceptional camera and advanced
                display technology.
              </p>
              <button className="underline">Shop now</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 gap-4">
            <div
              className="relative bg-contain bg-black bg-no-repeat bg-right h-[14rem] rounded-xl"
              style={{ backgroundImage: "url('/images/arrival-3.png')" }}
            >
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:left-3 md:transform-none space-y-3 text-center md:text-left w-full px-4">
                <h3 className="text-2xl font-bold">Artel TV</h3>
                <p className="md:text-base text-sm">
                  Smart TV with a sleek design and vivid display for an
                  immersive viewing experience.
                </p>
                <button className="underline">Shop now</button>
              </div>
            </div>

            <div
              className="relative bg-contain bg-black bg-no-repeat bg-right h-[14rem] rounded-xl"
              style={{ backgroundImage: "url('/images/arrival-4.png')" }}
            >
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:left-3 md:transform-none space-y-3 text-center md:text-left w-full px-4">
                <h3 className="text-2xl font-bold">Boss Watches</h3>
                <p className="md:text-base text-sm">
                  Elegant and stylish watches that combine functionality and
                  fashion.
                </p>
                <button className="underline underline-offset-2">
                  Shop now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Arrival;

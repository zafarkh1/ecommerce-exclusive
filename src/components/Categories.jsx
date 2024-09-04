function Categories({ active, setActive, data }) {
  return (
    <div className="container mx-auto lg:pt-12 py-6">
      <p className="text-red-700 flex items-center gap-4 lg:text-lg">
        <span className="bg-red-700 h-8 w-3 rounded-sm"></span>
        <span className="font-semibold">Categories</span>
      </p>
      <h2 className="lg:text-4xl text-2xl font-medium text-center lg:text-left lg:mt-4 lg:mb-9 mt-3 mb-7">
        Browse by category
      </h2>
      <div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-3 gap-6 pb-16 border-b-2">
        {data.map((item, index) => (
          <div
            key={index}
            className={`lg:py-6 py-2 border-2 flex flex-col items-center lg:gap-3 gap-2 rounded-lg cursor-pointer
              ${active === item.title ? "bg-rose-700 text-white" : ""}`}
            onClick={() => setActive(item.title)}
          >
            <p className="lg:text-4xl">{item.icon}</p>
            <p className="text-sm lg:text-base">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;

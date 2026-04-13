
export default function FooterTop() {
  return (
    <div className="relative w-full lg:h-[650px] overflow-hidden ">
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        alt="Maison de luxe"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative h-full flex flex-col items-center justify-start py-16 lg:px-10 px-4">

        <div className="lg:grid grid-cols-3">

          <h1 className="col-span-2 text-white text-2xl md:text-7xl font-bold">
            Find Your Perfect Property with Urbanet
          </h1>


          <div>
            <p className="text-gray-200 mt-4 text-base max-w-lg">
              Looking for your dream home? Urbanet makes
              property searching easy and stress-free! With our
              user-friendly platform and expert agents
            </p>
            <button className="mt-6 px-6 py-1.5 bg-white text-black hover:bg-gray-300 border transition-all duration-300 rounded-lg" >
              Start Your Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

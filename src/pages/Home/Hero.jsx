function Hero() {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-8 py-20 flex items-center justify-between">

        {/* Left Side */}
        <div className="max-w-xl">

          <h1 className="text-6xl font-bold text-gray-900 leading-tight">
            Discover Your Next
            <span className="text-blue-700"> Great Book</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Explore thousands of books,
            borrow with ease,
            and enjoy a modern digital library.
          </p>

          <div className="mt-8 flex gap-5">

            <button className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition">
              Explore Books
            </button>

            <button className="border border-blue-700 text-blue-700 px-6 py-3 rounded-xl hover:bg-blue-700 hover:text-white transition">
              Join Library
            </button>

          </div>

        </div>

        {/* Right Side */}

        <div>

          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=700"
            alt="Library"
            className="w-[520px] rounded-3xl shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;
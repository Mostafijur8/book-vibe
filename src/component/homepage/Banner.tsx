import React from "react";

const Banner = () => {
  return (
    <section className="container mx-auto mt-6 px-4 sm:px-6 lg:px-8">
      <div
        className="
          grid grid-cols-1 items-center gap-8
          overflow-hidden rounded-3xl
          border border-white/10
          bg-gradient-to-br from-black via-gray-900 to-gray-800
          px-6 py-8
          shadow-[0_15px_50px_rgba(0,0,0,0.35)]
          transition-all duration-300
          hover:shadow-[0_20px_70px_rgba(0,0,0,0.5)]
          sm:px-10
          md:py-10
          lg:grid-cols-2
          lg:gap-12
          lg:px-14
          lg:py-14
        "
      >
        {/* Banner Content */}
        <div className="text-center lg:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-400 sm:text-base">
            Discover Your Next Read
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-[43px]">
            Books to freshen up
            <br className="hidden sm:block" />
            <span className="text-green-400">your bookshelf</span>
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-gray-300 sm:text-base lg:mx-0">
            Explore amazing books and discover your next favorite story. Build a
            bookshelf full of books that inspire and entertain you.
          </p>

          <button
            className="
              btn btn-success mt-6 rounded-xl px-6
              font-bold text-white
              shadow-[0_5px_20px_rgba(34,197,94,0.25)]
              transition duration-300
              hover:scale-105
              hover:shadow-[0_8px_30px_rgba(34,197,94,0.4)]
            "
          >
            View The List
          </button>
        </div>

        {/* Banner Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/assets/banner/banner.png"
            alt="Books banner"
            className="
              w-full max-w-xs object-contain
              drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]
              transition duration-500
              hover:scale-105
              sm:max-w-sm
              md:max-w-md
              lg:max-w-lg
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

'use client';

const CtaSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-10 md:px-12 lg:px-5">
        <div className="relative p-6 sm:p-10 md:p-14 lg:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 space-y-8 shadow-md overflow-hidden">

          {/* Top blur light */}
          <div className="absolute w-14 h-14 rounded-full bg-gradient-to-bl from-blue-600 to-violet-500 blur-2xl z-10 -top-7 -left-7 opacity-40" />

          {/* Bottom blur light */}
          <div className="absolute w-14 h-14 rounded-full bg-gradient-to-bl from-blue-600 to-violet-500 blur-2xl z-10 -bottom-7 -right-7 opacity-40" />

          {/* Content */}
          <div className="text-center flex flex-col items-center justify-center space-y-6 relative z-20 max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              Join other{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-bl from-blue-700 to-violet-400 dark:from-blue-300 dark:to-violet-400">
                600 Amazing
              </span>{' '}
              developers
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eligendi, doloremque velit excepturi.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full flex flex-col sm:flex-row items-center gap-4 max-w-lg"
            >
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                required
                className="py-3 px-5 rounded-lg text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-800 placeholder:text-gray-600 dark:placeholder:text-gray-400 outline-none w-full"
              />
              <button
                type="submit"
                className="py-3 px-6 rounded-lg bg-blue-600 dark:bg-blue-500 text-white font-medium text-base w-full sm:w-auto hover:bg-blue-700 dark:hover:bg-blue-400 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

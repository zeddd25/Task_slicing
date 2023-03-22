import React from "react";

const Notfound = () => {
  return (
    <main className="flex min-h-full justify-center items-center h-screen bg-white py-24 px-6 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="font-semibold text-indigo-600 text-[80px]">
          404
        </p>
        <h1 className="mt-1 text-[80px] font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-2xl bg-indigo-600 px-10 py-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back
          </a>
        </div>
      </div>
    </main>
  );
};

export default Notfound;

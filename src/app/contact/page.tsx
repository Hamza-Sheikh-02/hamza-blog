import React from "react";

const Contact = () => {
  return (
    <section className="text-gray-600 dark:text-gray-100 body-font relative bg-white dark:bg-black">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-100">
            Contact Us
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600 dark:text-gray-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 dark:bg-gray-700 dark:text-gray-100 bg-opacity-50 rounded border border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600 dark:text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 dark:bg-gray-700 dark:text-gray-100 bg-opacity-50 rounded border border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600 dark:text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 dark:bg-gray-700 dark:text-gray-100 bg-opacity-50 rounded border border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-[rgb(42,37,75)] hover:bg-[rgb(102,88,192)] border-0 py-2 px-8 focus:outline-none rounded text-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

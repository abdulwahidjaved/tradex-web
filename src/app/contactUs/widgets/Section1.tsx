'use client';

import React from 'react';

const Section1: React.FC = () => {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 space-y-16">

        {/* Page Header */}
        <div className="text-center space-y-5 max-w-xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Contact Us
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
            We’d love to hear from you! Reach out anytime.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            { title: 'Email Us', text: 'contact@example.com' },
            { title: 'Call Us', text: '+1 (123) 456-7890' },
            { title: 'Visit Us', text: '123 Main St\nCity, Country 12345' },
          ].map(({ title, text }, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-gray-950 shadow transition-transform duration-300 hover:-translate-y-2"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2 whitespace-pre-line text-sm sm:text-base">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Send a Message Form */}
        <div className="bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 p-6 sm:p-10 rounded-2xl shadow space-y-10 transition-transform duration-300 hover:-translate-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center">
            Send Us a Message
          </h2>
          <form className="grid gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="px-4 py-2 rounded-md bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="px-4 py-2 rounded-md bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Your message"
                className="px-4 py-2 rounded-md bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition w-full sm:w-auto"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Section1;

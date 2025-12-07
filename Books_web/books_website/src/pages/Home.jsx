import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <section className="w-full   relative ">

        <img
          src="homepage.jpg"
          alt=""
          className="w-full h-150 object-cover"
        />

        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6 z-20 translate-y-[-80px]">

          <span className="text-5xl text-blue-600 dark:text-sky-400">
            <FaBookOpen />
          </span>
          <h2 className="text-white text-4xl font-bold drop-shadow-lg">
            Welcome to BookVerse
          </h2>

          <p className="text-white text-lg max-w-xl drop-shadow-lg">
            Join thousands of readers discovering amazing stories every day. Your next adventure is just a page away.          </p>

          <NavLink to="/books">
            <button className="bg-red-500 hover:bg-red-600 text-white text-xl py-3 px-6 rounded-md shadow-lg font-semibold">
              Explore Books
            </button>
          </NavLink>

        </div>

      </section>
    </>
  );
};

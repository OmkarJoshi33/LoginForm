import React from "react";
import { NavLink } from "react-router-dom";

const RegisterForm = () => {
  return (
    <>
      <div className="container flex relative h-[900px] justify-center items-center w-screen">
        <div className="container z-10 relative flex justify-center items-center text-white bg-transparent 2xl:w-4/6 2xl:h-4/6 sm:w-4/6 sm:h-4/6 md:h-4/6 md:w-4/5 lg:h-4/6 lg:w-3/4 xl:h-4/6 xl:w-4/6 h-3/5 w-4/5  rounded-md overflow-hidden">
          <div className="flex h-[2000px] absolute w-[2000px] justify-center items-center bg-white overflow-hidden gradiante"></div>
          <div className="flex absolute h-[99%] w-[99%] justify-center items-center rounded-md bg-black">
            <div className="block h-5/6 w-5/6 bg-gray-900 rounded-md opacity-70">
              <div className="2xl:h-28 xl:h-28 lg:h-28 md:h-24 sm:h-20 h-14 w-full flex flex-col relative justify-center items-center">
                <span className="text-3xl sm:text-4xl text-white opacity-65 hover:opacity-85 font-extrabold">
                  Register
                </span>
              </div>
              <form className="flex flex-col justify-center items-center m-4 p-3">
                <div className="2xl:flex xl:flex lg:flex md:flex sm:block   m-2 h-auto 2xl:w-5/6 xl:w-5/6 lg:w-5/6 md:w-11/12  sm:w-full w-full items-center justify-between gap-2 ">
                  <label className=" flex sm:my-2 h-10  2xl:w-[50%] xl:w-[50%] md:w-[50%] lg:w-[50%] sm:w-[100%] w-full justify-center items-center rounded-3xl bg-gray-800 hover:opacity-60">
                    <input
                      type="First Name"
                      placeholder="First Name"
                      className="bg-inherit h-auto px-2 w-11/12 outline-none "
                    />
                  </label>
                  <label className="flex my-2 h-10  2xl:w-[50%] xl:w-[50%] md:w-[50%] lg:w-[50%] sm:w-[100%] w-full  justify-center items-center rounded-3xl bg-gray-800 hover:opacity-60">
                    <input
                      type="Last Name"
                      placeholder="Last Name"
                      className="bg-inherit h-auto  w-11/12 outline-none"
                    />
                  </label>
                </div>
                <label className="flex my-2 h-10 w-full 2xl:w-5/6 xl:w-5/6 lg:w-5/6 md:w-11/12  justify-center items-center rounded-3xl bg-gray-800 hover:opacity-60">
                  <input
                    type="password"
                    placeholder="Password"
                    className="bg-inherit h-auto w-5/6 outline-none"
                  />
                </label>
                <label className="flex my-3 h-10 w-full 2xl:w-5/6 xl:w-5/6 lg:w-5/6 md:w-11/12  justify-center items-center rounded-3xl bg-gray-800 hover:opacity-60">
                  <input
                    type="password"
                    placeholder="Confrim Password"
                    className="bg-inherit h-auto w-5/6 outline-none"
                  />
                </label>

                <button className="flex flex-col my-5 bg-sky-600 w-full sm:w-5/6 justify-center items-center rounded-3xl h-10 font-bold opacity-55 hover:bg-sky-400">
                  Register
                </button>
                <div className="block">
                  <a href="">
                    <p className="block opacity-65 hover:opacity-75 hover:underline">
                      Alredy Have Account ?<NavLink to="/loginForm" className="text-sky-600 hover:text-sky-400">Login</NavLink>
                    </p>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;

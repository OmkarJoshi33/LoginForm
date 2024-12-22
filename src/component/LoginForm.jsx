import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginForm=()=>{
    return(
        <>
        <div className="container flex relative h-[800px] justify-center items-center w-screen">
        <div className="container z-10 relative flex justify-center items-center text-white bg-transparent 2xl:w-4/12 2xl:h-4/6 sm:w-3/4 sm:h-3/5 md:h-3/5 md:w-2/3 lg:h-4/6 lg:w-2/4 xl:h-4/6 xl:w-2/5 h-3/5 w-4/5  rounded-md overflow-hidden">
          <div className="flex h-[2000px] absolute w-[2000px] justify-center items-center bg-white overflow-hidden gradiante"></div>
          <div className="flex absolute h-[99%] w-[99%] justify-center items-center rounded-md bg-black">
            <div className="block h-5/6 w-5/6 bg-gray-900 rounded-md opacity-70">
              <div className="h-28 w-full flex flex-col relative justify-center items-center">
                <span className="text-3xl sm:text-4xl text-white opacity-65 hover:opacity-85 font-extrabold">
                  Login
                </span>
              </div>
              <form className="flex flex-col justify-center items-center m-4 p-3">
                <label className="flex my-3 h-10 w-full sm:w-5/6 justify-center items-center rounded-3xl bg-gray-800 hover:opacity-60">
                  <input
                    type="email"
                    placeholder="Email ID"
                    className="bg-inherit h-auto w-5/6 outline-none"
                  />
                  <FaLock className="flex opacity-55" />
                </label>
                <label className="flex my-3 h-10 w-full sm:w-5/6 justify-center items-center rounded-3xl bg-gray-800 hover:opacity-60">
                  <input
                    type="password"
                    placeholder="Password"
                    className="bg-inherit h-auto w-5/6 outline-none"
                  />
                  <FaUser className="flex opacity-55" />
                </label>
                <div className="block">
                  <a href="">
                    <p className="block opacity-65 hover:opacity-75 hover:underline">
                      Forget password
                    </p>
                  </a>
                </div>
                <button className="flex flex-col my-5 bg-sky-600 w-full sm:w-5/6 justify-center items-center rounded-3xl h-10 font-bold opacity-55 hover:bg-sky-400">
                  Login
                </button>
                <div className="flex w-full justify-center items-center gap-1">
                  <p className="text-white text-sm opacity-55">
                    Don't have an account?
                  </p><NavLink  to="/RegisterForm" className="text-sky-600 hover:text-sky-400">Register</NavLink>

                  
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default LoginForm;

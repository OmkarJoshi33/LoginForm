import React from "react";
import  {NavLink}  from "react-router-dom";


const HomePage=() => {
    return (
        <>
        <div className="flex text-6xl  text-sky-400 h-screen w-screen justify-center items-center">
            Hellooooooo!
            <NavLink to="/LoginForm" className="block text-xl text-green-500 hover:underline">Back to home</NavLink>
        </div>
        </>
    );
    
}
export default HomePage;
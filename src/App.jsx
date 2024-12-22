import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link, createBrowserRouter ,RouterProvider } from "react-router-dom";

import RegisterForm from "./component/RegisterForm.jsx";
import LoginForm from "./component/LoginForm.jsx";

function App() {
  const router=createBrowserRouter([
    {
      path:"/LoginForm",
      element:<><LoginForm/></>
    },
    {
      path:"/RegisterForm",
      element:<><RegisterForm/></>
    }
  ])
  
    
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;

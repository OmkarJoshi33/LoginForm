import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link, createBrowserRouter ,RouterProvider } from "react-router-dom";

import RegisterForm from "./component/RegisterForm.jsx";
import LoginForm from "./component/LoginForm.jsx";
import HomePage from "./component/HomePage.jsx";

function App() {
  const router=createBrowserRouter([
    {
      path:"/LoginForm",
      element:<><LoginForm/></>
    },
    {
      path:"/RegisterForm",
      element:<><RegisterForm/></>
    },
    {
      path:"/HomePage",
      element:<><HomePage/></>
    }
  ])
  
    
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;

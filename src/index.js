import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Index from "./components/students/Index";
import Carsouel from "./components/students/Home/carsoule/Carsouel";
import About from "./components/students/Home/about/About";
import Lecuter from "./components/students/Home/lecuters/Lecuter";
import SignUp from "./components/login_register/SignUp";
import ErrorPage from "./components/Err-page/Error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navba from "./components/students/Home/navbar/Navba";
import LecuterDown from "./components/students/Home/lecuters/lectuerDown/LecuterDown";
import Login from "./components/login_register/Login";
import Assignmets from "./components/students/Home/assignmets/Assignmets";
import Profile from "./components/students/Home/Profile/Profile";
import Program from "./components/students/Home/program/Program";
import Coruses from "./components/students/Home/coruses/Coruses";
import Myfooter from "./components/students/Home/myfooter/Myfooter";
import UploadLectuer from "./components/Admin/Home/uploadLecuter/UploadLectuer";
import Admin from "./components/Admin/Home/Admin";
import Navb from './components/Admin/Home/navbar/Navb';
import Natification from "./components/Admin/Home/about/Natification";
import Carsouel_slider from "./components/Admin/Home/slider/Carsouel_slider";
import Account_management from "./components/Admin/Home/account_managemnt/Account_management";
// import Upload_Natification from "./components/Admin/Home/about/Natification";
import Edit_natification from "./components/Admin/Home/about/EditNatification";
import Edit_slider from "./components/Admin/Home/slider/EditSlider";
import Edit_lectuer from "./components/Admin/Home/uploadLecuter/EditLectuer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>

        <Index>
          <Navba />
          <Carsouel />
          <About />
          <Lecuter />
          <Myfooter />
        </Index>
      </>
    ),

    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/Login",
    element: <Login />,
  },

  {
    path: "/Lectuers",
    element: (
      <>
      <Navba />
        <Lecuter />,
      </>
    ),
  },
  {
    path: "/Assignmts",
    element: (
      <>
        <Navba />
        <Assignmets />
      </>
    ),
  },
  {
    path: "/DownloadLeacters",
    element: (
      <>
        <Navba />
        <LecuterDown />
      </>
    ),
    },
    {
      path: "/profile",
      element: (
        <>
          <Navba />
          <Profile />
        </>
      ),
    },
    {
      path: "/program",
      element: (
        <>
          <Navba />
          <Program />
        </>
      ),
    },
    {
      path: "/coruses",
      element: (
        <>
          <Navba />
          <Coruses />
        </>
      ),
    },

    //////////// ========= Admin =============////////
    {
      path: "/Admin",
      element: (
        <>
          <Admin>
          <Navb />
          <Carsouel_slider />
          <Natification />
          
            <UploadLectuer />
          </Admin>
        </>
      ),
    },
    {
      path: "/Edit_natification",
      element: (
        <>
          <Edit_natification />
        </>
      ),
    },
    {
      path: "/Edit_slider",
      element: (
        <>
          <Edit_slider />
        </>
      ),
    },
    {
      path: "/Edit_lectues",
      element: (
        <>
          <Edit_lectuer/>
        </>
      ),
    },
    {
      path: "/Account_management",
      element: (
        <>
          <Navb />
          
          <Account_management />
        </>
      ),
    },
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

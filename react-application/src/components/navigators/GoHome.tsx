import React, { ReactNode , useEffect} from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { NavLink, Outlet } from "react-router-dom"

export const GoHome: React.FC = () => {

     let navigate = useNavigate();
     useEffect(() => {
         navigate("/");
       }, []);
  
     return <></>;
}

export default GoHome;
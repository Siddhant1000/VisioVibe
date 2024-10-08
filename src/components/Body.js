import React from "react";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import WatchPage from "./WatchPage";
import { Outlet } from "react-router-dom";

const Body = () =>{
    return(
        <div className="flex">
        <SideBar/>
        <Outlet/>
        </div>
    )
}

export default Body;
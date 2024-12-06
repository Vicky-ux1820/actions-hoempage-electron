import React from "react";
import "./styles/app.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LayoutProvider } from "./components/Layout/LayoutProvider";
import TitleBar from "./components/Titlebar/TitleBar.js";
import LeftSidebar from "./components/LeftSideBar/LeftSideBar.js";
import MainZone from "./components/Mainzone/MainZone";
// import RightSidebar from "./components/Rightsidebar/RightSideBar";
// import BottomBar from "./components/Bottombar/BottomBar";
// import StatusBar from "./components/Statusbar/StatusBar";

const App = () => {
  return (

      <LayoutProvider>
      <div className="app">
        <TitleBar />
        <div className="content-wrapper">
          <div className="content">
            <LeftSidebar />
            <div className="main-bottom-wrapper">
              <MainZone />
            </div>
          </div>
        </div>
      </div>
    </LayoutProvider>
  
  
  );
};

export default App;

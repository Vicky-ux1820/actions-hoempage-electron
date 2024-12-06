import React, { useContext, useEffect } from "react";
import "../../styles/titlebar.scss";
import leftSidebarIcon from "../assets/titlebar/leftsidebar.svg";
import rightSidebarIcon from "../assets/titlebar/bottombar.svg";
import bottombarIcon from "../assets/titlebar/rightsidebar.svg";
import { useLayout } from "../Layout/LayoutProvider";

function TitleBar() {
  const { toggleLeftSidebar, toggleRightSidebar, toggleBottomBar } =
    useLayout();
  useEffect(() => {
    const closeButton = document.getElementById("closeButton");
    const minimizeButton = document.getElementById("minimizeButton");
    const maximizeButton = document.getElementById("maximizeButton");

    // Close App
    closeButton.addEventListener("click", () => {
      window.electronAPI.closeApp();
    });

    // Minimize App
    minimizeButton.addEventListener("click", () => {
      window.electronAPI.minimizeApp();
    });

    // Maximize or Restore App
    maximizeButton.addEventListener("click", () => {
      window.electronAPI.maximizeApp();
    });

    // Cleanup event listeners
    return () => {
      closeButton.removeEventListener("click", () => {
        window.electronAPI.closeApp();
      });
      minimizeButton.removeEventListener("click", () => {
        window.electronAPI.minimizeApp();
      });
      maximizeButton.removeEventListener("click", () => {
        window.electronAPI.maximizeApp();
      });
    };
  }, []);

  return (
    <div className="title-bar">
      <div className="window-controls">
        <button id="closeButton" className="close" aria-label="Close">
          <img
            src={process.env.PUBLIC_URL + "/assets/svg/close.svg"}
            alt="Close"
          />
        </button>
        <button id="minimizeButton" className="minimize" aria-label="Minimize">
          <img
            src={process.env.PUBLIC_URL + "/assets/svg/minimize.svg"}
            alt="Minimize"
          />
        </button>
        <button id="maximizeButton" className="maximize" aria-label="Maximize">
          <img
            src={process.env.PUBLIC_URL + "/assets/svg/maximize.svg"}
            alt="Maximize"
          />
        </button>
      </div>

      <div className="sidebar-buttons">
        <div
          id="toggleSidebar"
          className="SidebarLeft"
          aria-label="Toggle Sidebar"
          onClick={toggleLeftSidebar}>
          <img src={leftSidebarIcon} alt="Left Sidebar" />
        </div>
        <div
          id="toggleSidebarRight"
          className="SidebarRight"
          aria-label="Toggle Sidebar"
          onClick={toggleBottomBar}>
          <img src={bottombarIcon} alt="Right Sidebar" />
        </div>
        <div
          id="toggleSidebarBottom"
          className="SidebarBottom"
          aria-label="Toggle Bottom Bar"
          onClick={toggleRightSidebar}>
          <img src={rightSidebarIcon} alt="Bottom Bar" />
        </div>
      </div>
    </div>
  );
}

export default TitleBar;

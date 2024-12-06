// components/Sidebar.js
import React from "react";
import '../../styles/homesidebar.scss';
import logo from "../assets/homepage/logo.svg"
import searchIcon from "../assets/homepage/search-lg.svg"
import homelineIcon from "../assets/homepage/home-line.svg"
import barChartIcon from "../assets/homepage/bar-chart-square-02.svg"
import rowIcon from "../assets/homepage/rows-01.svg"
import checkIcon from "../assets/homepage/check-done-01.svg"
import lifebouyIcon from "../assets/homepage/life-buoy-01.svg"
import settingIcon from "../assets/homepage/settings-01.svg"
import avatarIcon from "../assets/homepage/Avatar (2).svg"
import selectorIcon from "../assets/homepage/chevron-selector-vertical.svg"  

const HomeSidebar = () => {
  return (
    <div className="homepage-navigation-sidebar-container">
      <div className="homepage-navigation-sidebar-navigation-container">
        <div className="homepage-navigation-sidebar-navigation-container-top">
          <div className="homepage-navigation-sidebar-navigation-header-container">
            <div className="homepage-navigation-sidebar-navigation-header-logowrap">
              <img src={logo} alt="logo" />
            </div>
            <div className="homepage-navigation-sidebar-navigation-header-search">
              <div className="primary-search-action">
                <div className="primary-input-dropdown">
                  <div className="primary-input-search-content form-group">
                    <img src={searchIcon} alt="search" />
                    <input type="search" className="primary-search-input-box" placeholder="Search" />
                    <label className="primary-search-label">Search</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="homepage-navigation-sidebar-navigation-links-container">
            <SidebarLink icon={homelineIcon} text="Home" />
            <SidebarLink icon={barChartIcon} text="Tutorials" />
            <SidebarLink icon={rowIcon} text="Node Studio" />
            <SidebarLink icon={checkIcon} text="My Details" />
          </div>
        </div>
        <div className="homepage-navigation-sidebar-navigation-container-bottom">
          <div className="homepage-navigation-sidebar-navigation-links-container">
            <SidebarLink icon={lifebouyIcon} text="Support" />
            <SidebarLink icon={settingIcon} text="Settings" />
          </div>
          <div className="homepage-navigation-sidebar-account-card-container">
            <div className="homepage-navigation-sidebar-account-card-wrapper">
              <div className="homepage-navigation-sidebar-account-card-text-and-user-icon-container">
                <div className="homepage-navigation-sidebar-account-card-user-icon-container">
                  <img src={avatarIcon} alt="avatar" />
                </div>
                <div className="homepage-navigation-sidebar-account-card-text-container">
                  <div className="homepage-navigation-sidebar-account-card-text">Tushar Mandal</div>
                  <div className="homepage-navigation-sidebar-account-card-supporting-text">tkm@avkalanlabs</div>
                </div>
              </div>
              <div className="homepage-navigation-sidebar-account-card-action">
                <img src={selectorIcon} alt="selector" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarLink = ({ icon, text }) => (
  <div className="homepage-navigation-sidebar-link-item">
    <div className="homepage-navigation-sidebar-link-item-wrapper">
      <img src={icon} alt={text} className="homepage-navigation-sidebar-link-base-icon" />
      <div className="homepage-navigation-sidebar-link-base-text">{text}</div>
    </div>
  </div>
);

export default HomeSidebar;

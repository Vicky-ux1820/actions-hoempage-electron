import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/settings-sidebar.scss";
import "../../styles/homesidebar.scss"
import creditCardIcon from "../assets/setting/credit-card-01.svg";
import flagIcon from "../assets/setting/flag-05.svg";
import logoutIcon from "../assets/setting/log-out-01.svg";
import notificationIcon from "../assets/setting/notification-box.svg";
import passcode from "../assets/setting/passcode.svg";
import toggleRightIcon from "../assets/setting/toggle-01-right.svg";
import userSquareIcon from "../assets/setting/user-square.svg";
import usersIcon from "../assets/setting/users-01.svg";
import avatarIcon from "../assets/homepage/Avatar (2).svg"
import selectorIcon from "../assets/homepage/chevron-selector-vertical.svg"  

const SettingSidebar = () => {
  return (
    <div className="settings-navigation-sidebar-container">
      <div className="settings-navigation-sidebar-navigation-container">
        <div className="settings-navigation-sidebar-navigation-header-text">Settings</div>

        <div className="settings-navigation-sidebar-navigation-links-container">
          <div className="settings-navigation-sidebar-link-item">
            <Link to="/my-details" className="settings-navigation-sidebar-link-item-wrapper">
              <div className="settings-navigation-sidebar-link-base-icon">
                <img src={flagIcon} alt="flag" />
              </div>
              <div className="settings-navigation-sidebar-link-base-text">My Details</div>
            </Link>
          </div>
          <div className="settings-navigation-sidebar-link-item">
            <Link to="/profile" className="settings-navigation-sidebar-link-item-wrapper">
              <div className="settings-navigation-sidebar-link-base-icon">
                <img src={userSquareIcon} alt="user" />
              </div>
              <div className="settings-navigation-sidebar-link-base-text">Profile</div>
            </Link>
          </div>
          <div className="settings-navigation-sidebar-link-item">
            <Link to="/password" className="settings-navigation-sidebar-link-item-wrapper">
              <div className="settings-navigation-sidebar-link-base-icon">
                <img src={passcode} alt="passcode" />
              </div>
              <div className="settings-navigation-sidebar-link-base-text">Password</div>
            </Link>
          </div>
          <div className="settings-navigation-sidebar-link-item">
            <Link to="/team" className="settings-navigation-sidebar-link-item-wrapper">
              <div className="settings-navigation-sidebar-link-base-icon">
                <img src={usersIcon} alt="users" />
              </div>
              <div className="settings-navigation-sidebar-link-base-text">Team</div>
            </Link>
          </div>
          <div className="settings-navigation-sidebar-link-item">
            <Link to="/billing" className="settings-navigation-sidebar-link-item-wrapper">
              <div className="settings-navigation-sidebar-link-base-icon">
                <img src={creditCardIcon} alt="card" />
              </div>
              <div className="settings-navigation-sidebar-link-base-text">Billing</div>
            </Link>
          </div>
          <div className="settings-navigation-sidebar-link-item">
            <Link to="/notifications" className="settings-navigation-sidebar-link-item-wrapper">
              <div className="settings-navigation-sidebar-link-base-icon">
                <img src={notificationIcon} alt="notification" />
              </div>
              <div className="settings-navigation-sidebar-link-base-text">Notifications</div>
            </Link>
          </div>
          <div className="settings-navigation-sidebar-link-item">
            <Link to="/integrations" className="settings-navigation-sidebar-link-item-wrapper">
              <div className="settings-navigation-sidebar-link-base-icon">
                <img src={toggleRightIcon} alt="toggle" />
              </div>
              <div className="settings-navigation-sidebar-link-base-text">Integrations</div>
            </Link>
          </div>
        </div>
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
  );
}

export default SettingSidebar;
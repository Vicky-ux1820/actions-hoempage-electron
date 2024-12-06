import React from 'react'
import { useState } from 'react';
import "../../styles/settings-main-content.scss"
import searchIcon from "../assets/setting/search-lg.svg"
import shortcutKeyIcon from "../assets/setting/shortcut_key.svg"
import dropdownIcon from "../assets/setting/dots-vertical.svg"
import layerIcon from "../assets/setting/layers-two-01.svg"
import cloudDownload from "../assets/setting/download-cloud-02.svg"
import arrowdownIcon from "../assets/setting/arrow-down (1).svg";
import uncheckIcon from "../assets/setting/unchecked.svg"


const Billing = () => {
    // Create a state to track which checkbox is selected
    const [selectedPlan, setSelectedPlan] = useState(null);
  
    // Handle checkbox click
    const handleCheckboxClick = (planId) => {
      if (selectedPlan === planId) {
        setSelectedPlan(null); // Deselect if already selected
      } else {
        setSelectedPlan(planId); // Select the clicked plan
      }
    }

      // Data for the table
  const billingData = [
    { date: "Dec 1, 2025", description: "USD $10.00",date: "Dec 1, 2025", description: "USD $10.00" },
    { date: "Nov 1, 2025", description: "USD $10.00",date: "Dec 1, 2025", description: "USD $10.00" },
    { date: "Oct 1, 2025", description: "USD $10.00",date: "Dec 1, 2025", description: "USD $10.00" },
    { date: "Sep 1, 2025", description: "USD $10.00",date: "Dec 1, 2025", description: "USD $10.00" },
    { date: "Aug 1, 2025", description: "USD $10.00",date: "Dec 1, 2025", description: "USD $10.00" },
    { date: "Jul 1, 2025", description: "USD $10.00",date: "Dec 1, 2025", description: "USD $10.00" },
    { date: "Jun 1, 2025", description: "USD $10.00",date: "Dec 1, 2025", description: "USD $10.00" }
  ];

  return (
      <div className="setting-page-main-container">
       <div className="setting-page-main-header-section">
        <div className="setting-page-main-header-section-wrapper">
            <div className="setting-page-main-header-section-heading">
                Billing
            </div>
            <div className="setting-page-main-header-section-search">
            <div class="setting-page-search-action">
            <div class="setting-page-input-dropdown">
              <div class="setting-page-input-search-content form-group" id="search-container">
                <img
                  src={searchIcon}
                  alt="search"
                  class="setting-page-search-image"
                />
                <input
                  type="text"
                  id="search-input"
                  name=""
                  class="form-field setting-page-search-input-box"
                  placeholder="Search"
                />
                <label for="search-input" class="setting-page-search-label">Search</label>
              </div>
              <div class="setting-page-shortcut-key">
                <img
                  src={shortcutKeyIcon}
                  alt="shortcut key"
                  class="serach-shortcut-key"
                />
              </div>
            </div>
            </div>
            </div>
        </div>
       </div>
       <div className="setting-page-main-secondary-container">
        <div className="setting-page-main-secondary-container-header-wrapper">
        <div className="setting-page-main-secondary-container-header-texts">
        <div className="setting-page-main-secondary-container-heading">Account plans</div>
        <div className="setting-page-main-secondary-container-subheading">
        Pick an account plan that fits your workflow.
        </div>
        </div>
        <div className="setting-page-dropdown-dots">
            <img src={dropdownIcon} alt="" />
        </div>
        </div>
        <div className="setting-page-main-secondary-container-checkbox-content-wrapper">
            <div className="setting-page-main-secondary-container-checkbox-content-text-cont">
                <div className="setting-page-main-secondary-container-checkbox-content-text">Current plan</div>
                <div className="setting-page-main-secondary-container-checkbox-content-supporting-text">We’ll credit your account if you need to downgrade during the billing cycle.</div>
            </div>
            <div className="setting-page-main-secondary-container-checkbox-grp">
          {['basic1', 'basic2', 'basic3'].map((planId, index) => (
            <div
              key={planId}
              className={`setting-page-main-secondary-container-checkbox-item ${
                selectedPlan === planId ? 'selected' : ''
              }`}
              onClick={() => handleCheckboxClick(planId)} // Attach click handler
            >
              <div className="setting-page-main-secondary-container-checkbox-item-wrapper">
                <div className="setting-page-main-secondary-container-checkbox-icon">
                  <img src={layerIcon} alt="layer" />
                </div>
                <div className="setting-page-main-secondary-container-checkbox-text-cont">
                  <div className="setting-page-main-secondary-container-checkbox-head-text">
                    Basic plan <span className="checkbox-span-text">$10/month</span>
                  </div>
                  <div className="setting-page-main-secondary-container-checkbox-supporting-text">
                    Includes up to 10 users, 20 GB individual data and access to all features.
                  </div>
                </div>
                <div className="setting-page-main-secondary-container-checkbox-base">
                  {/* Render the circle that mimics a radio button */}
                  <div className={`radio-button ${selectedPlan === planId ? 'selected' : ''}`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
       </div>
       <div className="setting-page-main-secondary-container">
        <div className="setting-page-main-secondary-container-header-wrapper">
        <div className="setting-page-main-secondary-container-header-texts">
        <div className="setting-page-main-secondary-container-heading">Billing and Invoicing</div>
        <div className="setting-page-main-secondary-container-subheading">
        Pick an account plan that fits your workflow.
        </div>
       
        </div>
        <div className="setting-page-download-cont usage-cont-settings">
          <div className="setting-page-download-cont-usage-icon">
            <img src={cloudDownload} alt="" />
          </div>
          <div className="status-bar-right-ram-usage-text">Download</div>
        </div>

        </div>
        <div className="setting-page-main-secondary-container-checkbox-content-wrapper">
            <div className="setting-page-main-secondary-container-checkbox-content-text-cont">
                <div className="setting-page-main-secondary-container-checkbox-content-text">Billing</div>
                <div className="setting-page-main-secondary-container-checkbox-content-supporting-text">We’ll credit your account if you need to downgrade during the billing cycle.</div>
            </div>
            <div className="desktop-subscribe-card-table-container">
              <table id="sidebar-table">
                <thead className="sidebar-table-thead">
                  <tr className="sidebar-table-tr">
                    <th className="sidebar-table-th">
                      <div className="sidebar-table-head-text">
                        <img src={uncheckIcon} alt="uncheck" className="invoice-column-icon" />
                        Invoice
                      </div>
                      <img src={arrowdownIcon} alt="arrow-down" />
                    </th>
                    <th className="sidebar-table-th">Status</th>
                    <th className="sidebar-table-th">Amount</th>
                    <th className="sidebar-table-th">Plan</th>
                    <th className="sidebar-table-th">Action</th>
                  </tr>
                </thead>
                <tbody className="sidebar-table-tbody">
                  {billingData.map((item, index) => (
                    <tr key={index} className="sidebar-table-tr sidebar-table-tr-secondary">
                      <td className="sidebar-table-td">
                      <img src={uncheckIcon} alt="icon" className="invoice-column-icon" />
                           {item.date}
                     </td>
                      <td className="sidebar-table-td">{item.description}</td>
                      <td className="sidebar-table-td">{item.description}</td>
                      <td className="sidebar-table-td">{item.date}</td>
                      <td className="sidebar-table-td">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
        </div>
       </div>
  
  )
}


export default Billing

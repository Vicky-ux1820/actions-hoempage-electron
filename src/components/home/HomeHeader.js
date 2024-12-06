import React, { useState } from 'react';
import "../../styles/homemain.scss";
import cloudDownloadIcon from "../assets/homepage/download-cloud-02 (1).svg";
import plusIcon from "../assets/homepage/plus.svg";
import plusIcon2 from "../assets/homepage/plus (2).svg";
import dotIcon1 from "../assets/homepage/_Dot (1).svg";
import calendarIcon from "../assets/homepage/calendar.svg";
import filterIcon from "../assets/homepage/filter-lines.svg";

const HomeHeader = ({ tags, onFilterChange, onAddTag }) => {
  const [isAddingTag, setIsAddingTag] = useState(false);
  const [newTag, setNewTag] = useState('');

  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      onAddTag(newTag);
      setNewTag('');
      setIsAddingTag(false);
    }
  };

  return (
    <div className="home-page-main-header-section">
      <div className="home-page-main-header-section-wrapper">
        <div className="home-page-main-header-section-heading-and-actions">
          <div className="home-page-main-header-section-heading-and-subheading">
            <div className="home-page-main-header-section-heading">Active Projects</div>
            <div className="home-page-main-header-section-subheading">Your currently active projects</div>
          </div>
          <div className="home-page-main-header-section-actions-grp">
            <div className="button-component secondary">
              <div className="button-icon">
                <img src={cloudDownloadIcon} alt="cloud" />
              </div>
              <div className="button-text">Export</div>
            </div>
            <div className="button-component primary">
              <div className="button-icon">
                <img src={plusIcon} alt="plus" />
              </div>
              <div className="button-text">Add</div>
            </div>
          </div>
        </div>

        <div className="home-page-main-header-section-tabs-and-filters">
          <div className="home-page-main-header-section-tabs-button-grp">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="home-page-main-header-section-tabs-button button-base"
                onClick={() => onFilterChange(tag)}
              >
                <div className="active-tab-indicator-icon">
                  <img src={dotIcon1} alt="dot-icon" />
                </div>
                {tag}
              </div>
            ))}

            {/* Add new tag functionality */}
            {!isAddingTag ? (
              <div
                className="home-page-main-header-section-tabs-button button-base-add"
                onClick={() => setIsAddingTag(true)}
              >
                <img src={plusIcon2} alt="plus" />
              </div>
            ) : (
              <div className="home-page-main-header-section-tabs-button button-base-add">
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
                  placeholder="New Tag"
                  className="new-tag-input"
                />
                <div className="add-tag-button" onClick={handleAddTag}>
                  <img src={plusIcon2} alt="add tag" />
                </div>
              </div>
            )}
          </div>

          <div className="home-page-main-header-section-filter-grp">
            <div className="button-component secondary">
              <div className="button-icon">
                <img src={calendarIcon} alt="calendar" />
              </div>
              <div className="button-text">Jan 10, 2025 – Jan 16, 2025</div>
            </div>
            <div className="button-component secondary">
              <div className="button-icon">
                <img src={filterIcon} alt="filter" />
              </div>
              <div className="button-text">Filters</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;





document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.home-page-main-header-section-tabs-button');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to the clicked tab
            tab.classList.add('active');
        });
    });
});
// components/BlogCard.js
import React from "react";
import '../../styles/blogcard.scss';
import arrowupRightIcon from "../assets/homepage/arrow-up-right (4).svg"
import dotIcon3 from "../assets/homepage/_Dot (2).svg"
import dotIcon4 from "../assets/homepage/_Dot (3).svg"

const BlogCard = ({ date, heading, description, tags, arrowupRightIcon, dotIcons }) => (
    <div className="resources-post-content">
      <div id="resources-original-content">
        <div className="resources-blog-post-card">
          <div className="resources-blog-image"></div>
          <div className="resource-blog-card-content">
            <div className="resource-heading-and-subheading">
              <div className="resource-badge-group">{date}</div>
              <div className="resources-heading-text">
                <div className="resources-heading-and-icon">
                  <div className="resources-blog-heading">{heading}</div>
                  <div className="blog-up-right-arrow">
                    <img src={arrowupRightIcon} alt="arrow-up-right" />
                  </div>
                </div>
                <div className="resources-supporting-text">{description}</div>
              </div>
            </div>
            <div className="resource-tags-group">
              {tags.map((tag, index) => (
                <div key={index} className="desktop-page-hero-section-header-subheading-badge-type">
                  <div className="desktop-page-hero-section-header-subheading-badge-inner-icon">
                    <img src={dotIcons[index]} alt="icon" />
                  </div>
                  <div className="desktop-page-hero-section-header-subheading-badge-text">{tag}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default BlogCard;




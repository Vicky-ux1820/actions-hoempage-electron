// App.js
import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import BlogCard from "./components/BlogCard";
import './App.css';

function Home() {
  return (
    <div className="home-page">
      <Sidebar />
      <div className="home-page-main-container">
        <Header />
        <div className="home-page-main-container-posts-section">
          <div className="home-page-main-container-posts-section-wrapper">
            <div className="resources-post-content">
              <div id="resources-original-content">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

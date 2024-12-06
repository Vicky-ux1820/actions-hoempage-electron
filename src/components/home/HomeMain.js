import React, { useState,useEffect } from "react";
import BlogCard from "../home/BlogCard";
import HomeHeader from "./HomeHeader";
import arrowupRightIcon from "../assets/homepage/arrow-up-right (4).svg";
import dotIcon3 from "../assets/homepage/_Dot (2).svg";
import dotIcon4 from "../assets/homepage/_Dot (3).svg";
import scrolldownIcon from "../assets/homepage/chevron-down (6).svg"
import scrollupIcon from "../assets/homepage/chevron-down (5).svg"

const blogData = [
  {
    date: "TKM • 20 Jan 2025",
    heading: "Cantilever Beam",
    description: "Lorem ipsum...",
    tags: ["Design", "Presentation"],
    dotIcons: [dotIcon3, dotIcon4],
  },
  {
    date: "ABC • 21 Jan 2025",
    heading: "Bridge Analysis",
    description: "Lorem ipsum...",
    tags: ["Engineering"],
    dotIcons: [dotIcon4],
  },
  {
    date: "DEF • 22 Jan 2025",
    heading: "Thermal Stress",
    description: "Understanding thermal...",
    tags: ["Thermal"],
    dotIcons: [dotIcon3],
  },
  {
    date: "XYZ • 15 Feb 2025",
    heading: "Finite Element Analysis",
    description: "Deep dive into FEA for complex structural modeling.",
    tags: ["Engineering", "Simulation", "Research"],
    dotIcons: [dotIcon3, dotIcon4, dotIcon3],
  },
  {
    date: "PQR • 10 Mar 2025",
    heading: "Machine Learning in CAD",
    description: "How machine learning enhances design automation.",
    tags: ["AI", "Automation", "Design"],
    dotIcons: [dotIcon4, dotIcon3, dotIcon3],
  },
  {
    date: "LMN • 25 Apr 2025",
    heading: "Thermodynamics Basics",
    description: "A beginner-friendly guide to thermodynamic principles.",
    tags: ["Thermal", "Education"],
    dotIcons: [dotIcon3, dotIcon4],
  },
  {
    date: "GHI • 30 Jan 2025",
    heading: "Bridge Inspection Techniques",
    description: "Exploring modern technologies for bridge safety checks.",
    tags: ["Inspection", "Engineering", "Safety"],
    dotIcons: [dotIcon4, dotIcon3, dotIcon4],
  },
  {
    date: "STU • 18 May 2025",
    heading: "Hydraulic Systems in Civil Engineering",
    description: "Understanding the role of hydraulics in construction.",
    tags: ["Hydraulics", "Civil", "Research"],
    dotIcons: [dotIcon4, dotIcon3, dotIcon4],
  },
  {
    date: "JKL • 11 Jun 2025",
    heading: "Wind Tunnel Testing",
    description: "Analyzing aerodynamic properties using wind tunnels.",
    tags: ["Aerodynamics", "Testing", "Engineering"],
    dotIcons: [dotIcon3, dotIcon4, dotIcon4],
  },
  {
    date: "EFG • 9 Jul 2025",
    heading: "Sustainability in Construction",
    description: "Green building materials and sustainable techniques.",
    tags: ["Sustainability", "Construction"],
    dotIcons: [dotIcon4, dotIcon3],
  },
  {
    date: "OPQ • 2 Aug 2025",
    heading: "Concrete Mix Design",
    description: "Optimizing concrete properties for strength and durability.",
    tags: ["Construction", "Thermal", "Design"],
    dotIcons: [dotIcon3, dotIcon4, dotIcon3],
  },
  {
    date: "OPQ • 2 Aug 2025",
    heading: "Concrete Mix Design",
    description: "Optimizing concrete properties for strength and durability.",
    tags: ["Construction", "Materials", "Design"],
    dotIcons: [dotIcon3, dotIcon4, dotIcon3],
  },
];

const initialTags = [
  "Default",
  "Design",
  "Presentation",
  "Thermal",
  "Engineering",
];

const HomeMain = () => {
  const [tags, setTags] = useState(initialTags);
  const [filteredBlogs, setFilteredBlogs] = useState(blogData);
  const [selectedTag, setSelectedTag] = useState("");

  // Filter blogs by selected tag
  const filterByTag = (tag) => {
    setSelectedTag(tag);
    if (tag === "Default") {
      setFilteredBlogs(blogData); // Show all blogs if 'Default' is selected
    } else {
      setFilteredBlogs(
        blogData.filter((blog) => blog.tags.some((t) => t === tag))

      );
    }

    const cards = document.querySelectorAll(".resources-blog-post-card");
  
    // Remove the animation class if it exists (to reset animations)
    cards.forEach((card) => {
      card.classList.remove("animate-card");
      void card.offsetWidth; // Trigger reflow to reset animation
      card.classList.add("animate-card");
  }
    )
}



  const addNewTag = (newTag) => {
    if (newTag && !tags.includes(newTag)) {
      setTags((prevTags) => [...prevTags, newTag]);
    }
  };

  const scrollToNextSection = () => {
    const mainContainer = document.querySelector('.home-page-main-container');
    mainContainer.scrollBy({
      top: window.innerHeight / 2, // Adjust scroll distance as needed
      behavior: 'smooth',
    });
  };
  const scrollToTop = () => {
    const mainContainer = document.querySelector('.home-page-main-container');
    mainContainer.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const mainContainer = document.querySelector('.home-page-main-container');
    const scrollDownBtn = document.querySelector('.scroll-navigator-btn');
    const scrollTopBtn = document.querySelector('.scroll-to-top-btn');
  
    const handleScroll = () => {
      const bottomReached = mainContainer.scrollHeight - mainContainer.scrollTop <= mainContainer.clientHeight + 50;
      
      if (mainContainer.scrollTop > 100) {
        scrollDownBtn.classList.remove('active');
        scrollTopBtn.classList.add('active');
      } else {
        scrollDownBtn.classList.add('active');
        scrollTopBtn.classList.remove('active');
      }
  
      if (bottomReached) {
        scrollTopBtn.classList.add('active');
      }
    };
  
    mainContainer.addEventListener('scroll', handleScroll);
  
    return () => {
      mainContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <div className="home-page-main-container">
        <div className="scroll-navigator">
  <button onClick={scrollToNextSection} className="scroll-navigator-btn">
    <img src={scrollupIcon} alt="Scroll Down" />
  </button>
  <button onClick={scrollToTop} className="scroll-to-top-btn">
    <img src={scrollupIcon} alt="Back to Top" />
  </button>
</div>

      <HomeHeader
        tags={tags}
        onFilterChange={filterByTag}
        onAddTag={addNewTag}
      />
      <div className="home-page-main-container-posts-section">
        <div className="home-page-main-container-posts-section-wrapper">
          {filteredBlogs.length ? (
            filteredBlogs.map((blog, index) => (
              <BlogCard
                key={index}
                {...blog}
                arrowupRightIcon={arrowupRightIcon}
              />
            ))
          ) : (
            <p>No posts available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeMain;

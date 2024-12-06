import React, { useState, useEffect } from "react";
import "../styles/ResizableSidebar.scss";

const ResizableSidebar = ({ isLeftSidebarOpen, isExpanded, expandedWidth, children }) => {
  // const [sidebarWidth, setSidebarWidth] = useState(350); // Default width of 300px
  let defaultWidth = 350;
  const [sidebarWidth, setSidebarWidth] = useState(defaultWidth);

  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (e) => {
    if (!isResizing) return;
    const newWidth = Math.max(e.clientX, 200); // Set minimum width
    setSidebarWidth(newWidth);
  };

  // let defaultWidth = 500;
  useEffect(() => {
    // Update the sidebar width based on expansion state
    if (isExpanded) {
      setSidebarWidth(expandedWidth); // Expanded width when SubNav is open
    } else {
      setSidebarWidth(defaultWidth); // Default width
    }
  }, [isExpanded, expandedWidth]);


  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);

  return (
    <div className={` resizable-sidebar-container ${isLeftSidebarOpen ? 'open' : ''} `}>
      {isLeftSidebarOpen && (
        <div className="resizable-sidebar" style={{ width: sidebarWidth }}>
          {children}
          <div className="resizer" onMouseDown={handleMouseDown} />
        </div>
      )}
    </div>
  );
};

export default ResizableSidebar;

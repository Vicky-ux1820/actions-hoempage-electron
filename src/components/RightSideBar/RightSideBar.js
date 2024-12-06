import React from 'react';
import { useLayout } from '../Layout/LayoutProvider';


const RightSidebar = () => {
  const { isRightSidebarVisible } = useLayout();

  return isRightSidebarVisible ? <div className="sidebar right">Right Sidebar</div> : null;
};

export default RightSidebar;

import React from 'react';
import { useLayout } from '../Layout/LayoutProvider';
import HomeSidebar from '../home/HomeSidebar';
import SettingSidebar from '../Settings/SettingSidebar';
import PreSettingMain from '../Settings/PreSettingMain';


const LeftSidebar = () => {
  const { isLeftSidebarVisible } = useLayout();

  return isLeftSidebarVisible ? <div className="sidebar left">
    <HomeSidebar></HomeSidebar>
    {/* <SettingSidebar></SettingSidebar> */}
  </div> : null;
};

export default LeftSidebar;

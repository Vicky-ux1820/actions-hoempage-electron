import React from 'react';
import HomeMain from "../home/HomeMain"
import SettingSidebar from '../Settings/SettingSidebar';
import PreSettingMain from '../Settings/PreSettingMain';
import Billing from '../Settings/Billing';

const MainZone = () => {
  return <div className="main-zone">
    <HomeMain></HomeMain>
    {/* <Billing></Billing> */}
  </div>;
};

export default MainZone;
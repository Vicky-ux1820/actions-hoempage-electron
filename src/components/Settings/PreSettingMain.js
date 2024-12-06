import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SettingSidebar from './SettingSidebar';
import Team from './Team';
import Billing from './Billing';

const PreSettingMain = ({ isSettingbar }) => {
  return (
    <div className={`presettingmain ${isSettingbar ? 'open' : ''}`}>

     <Billing></Billing>
     
    </div>
  );
};

export default PreSettingMain;

import React from 'react';
import { useLayout } from '../Layout/LayoutProvider';

const BottomBar = () => {
  const { isBottomBarVisible } = useLayout();

  return isBottomBarVisible ? <div className="bottom-bar">Bottom Bar</div> : null;
};

export default BottomBar;

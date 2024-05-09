import React, { useState } from 'react';
import Header from '../../pages/header-and-sidebar/header';
import Sidebar from '../../pages/header-and-sidebar/sidebar';

const Home = () => {
  const [isActive, setIsActive] = useState(true);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <>
    <div className="relative">
        <Header isActive={isActive} toggleSidebar={toggleSidebar} />
        <div className="flex">
            <Sidebar isActive={isActive} toggleSidebar={toggleSidebar} />
            {/* OVERLAY/DIMMING */}
            {!isActive && (
            <div
                className="fixed top-0 left-60 w-full h-full bg-black opacity-50 transition-opacity duration-300 z-10"
                onClick={toggleSidebar}
            ></div>
            )}
        </div>
    </div>

    <div className="mt-5 ml-2 underline">
        <p className="text-content29 leading-loose text-colorViolet ml-3 font-hover-bold">
            HOME
        </p>
    </div>

    </>
  );
};

export default Home;
import React, { useState } from 'react';
import Header from '../header-and-sidebar/header';
import Sidebar from '../header-and-sidebar/sidebar';

const Meeting1 = () => {
  const [isActive, setIsActive] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="relative">
        <Header isActive={isActive} toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar isActive={isActive} toggleSidebar={toggleSidebar} />
      <div className="flex">
        {!isActive && (
          <div
            className="fixed top-0 left-60 w-full h-full bg-black opacity-50 transition-opacity duration-300 z-10"
            onClick={toggleSidebar}>
          </div>
        )}
      </div>
      </div>
      </div>


      {/* CONTENT */}
      <div className="page-content p-5">
        <div className="flex text-white"> 
          <div className="w-12/12">
            
            <div className="bg-white p-1 rounded-2xl shadow-xl mb-4 inline-block">
              <p className="text-content29 leading-loose text-colorViolet ml-3 mr-3 font-hover-bold">
                MEETINGS / Meeting1
              </p>
            </div>
            
            <br/>

            <div className="flex justify-end mr-n-0.5">
              {/* VOICE RECORDER */}
              <button className="bg-white border border-[#1f1c2f] shadow-xl text-white font-bold py-1 px-3 mr-2 rounded-lg" title="Voice Recorder" onClick={toggleDropdown}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1f1c2f" 
                className="w-4 h-8 mr-0">
                  <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
                  <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 
                  0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 
                  0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
                </svg>
              </button>
              {/* DROPDOWN MENU */}
              {isDropdownOpen && (
                <div className="absolute right-24 mt-14 w-50 rounded-md shadow-lg bg-white ring-1 ring-[#1f1c2f] focus:outline-none">
                  <div className="py-1" role="none">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900" role="menuitem">Choose Language</a>
                  </div>
                </div>
              )}
              
              
              {/* SAVE AS PDF BUTTON */}
              <button className="bg-white border border-[#1f1c2f] shadow-xl text-white font-bold py-1 px-3 mr-2 rounded-lg" title="Download as PDF">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#1f1c2f" className="w-4 h-8 mr-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
                </svg>
              </button>

              {/* SAVE BUTTON */}
              <button className="bg-[#1f1c2f] shadow-xl hover:bg-black text-white font-bold py-2 px-8 mr-2 rounded-lg hover:bg-black" 
              title="Save" style={{ verticalAlign: 'top' }}>
                Save
              </button>
            </div>

            {/* NOTES */} 
            <div>
              <div className="bg-white rounded-lg shadow-lg p-3 mt-4 mb-1">
                <textarea className="w-full border rounded p-2 text-black h-85vh"
                cols="1000" placeholder="Take notes here..."></textarea>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Meeting1;
import React, { useState } from 'react';
import Header from '../../pages/header-and-sidebar/header';
import Sidebar from '../../pages/header-and-sidebar/sidebar';

const Account = () => {
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
        <div className="flex"> 
          <div className="w-full">
             
            <div className="bg-white p-1 rounded-2xl shadow-xl mb-4 inline-block">
              <p className="text-content29 leading-loose text-colorViolet ml-3 mr-3 font-hover-bold">
                ACCOUNT SETTINGS
              </p>
            </div>

            <br/>

            <div className="border-t-2 border-gray-400 mt-5 mb-1"></div>

            <br/>

            {/* CARD */}
            <div className="bg-paleWhite rounded-lg shadow-xl p-3 mt-2 h-auto">
              <div className="flex justify-end">
                <button className="flex bg-transparent border-none focus:outline-none mt-1 mr-1" title="Edit">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 mt-2 mb-11 px-7">
                <div className="flex flex-col mt-2">
                  <label htmlFor="firstName" className="text-gray-700">First Name:</label>
                  <input type="text" id="firstName" className="border-gray-300 border rounded-md px-3 py-2 placeholder-placeholder-black" placeholder="Users" readOnly />
                </div>
                <div className="flex flex-col mt-2">
                  <label htmlFor="lastName" className="text-gray-700">Last Name:</label>
                  <input type="text" id="lastName" className="border-gray-300 border rounded-md px-3 py-2 placeholder-placeholder-black" placeholder="Name" readOnly />
                </div>
                <div className="flex flex-col mt-2">
                  <label htmlFor="nameOfOrg" className="text-gray-700">Name of Organization:</label>
                  <input type="text" id="nameOfOrg" className="border-gray-300 border rounded-md px-3 py-2 placeholder-placeholder-black" placeholder="NameOfOrganization" readOnly />
                </div>
                <div className="flex flex-col mt-2">
                  <label htmlFor="email" className="text-gray-700">Email:</label>
                  <input type="text" id="email" className="border-gray-300 border rounded-md px-3 py-2 placeholder-placeholder-black" placeholder="usersemail@gmail.com" readOnly />
                </div>
                <div className="flex flex-col mt-2">
                  <label htmlFor="username" className="text-gray-700">Username:</label>
                  <input type="text" id="username" className="border-gray-300 border rounded-md px-3 py-2 placeholder-placeholder-black" placeholder="@usersusername" readOnly />
                </div>
                <div className="flex flex-col mt-2">
                  <label htmlFor="password" className="text-gray-700">Password:</label>
                  <input type="password" id="password" className="border-gray-300 border rounded-md px-3 py-2 placeholder-placeholder-black" placeholder="password" readOnly />
                </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
import React, { useState } from 'react';
import Header from '../../pages/header-and-sidebar/header';
import Sidebar from '../../pages/header-and-sidebar/sidebar';
import Link from 'next/link';

const Meetings = () => {
  const [isActive, setIsActive] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
    setIsDropdownOpen(false);
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
                MEETINGS
              </p>
            </div>

            <br/>

            {/* ADD MEETING BUTTON */}
            <div className="flex justify-end mb-3">
              <button className="bg-[#1f1c2f] shadow-xl hover:bg-black text-white font-bold py-2 px-8 rounded-lg hover:bg-black" 
              title="Add Meeting" onClick={toggleForm}>
                Add Meeting
              </button>
            </div>

            {/* FORM */}
            {isFormOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-xl relative w-full sm:w-[500px] h-[380px]">                  
                <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none" onClick={toggleForm}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                  <h2 className="text-xl text-colorViolet font-bold mb-2 mt-4">Add Meeting</h2>
                    <div className="border-t border-gray-400 mb-4"></div>
                    <form>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Meeting Name:
                        </label>
                        <input type="text" className="form-input mt-1 h-8 block w-full rounded border border-gray-400 text-sm pl-2" placeholder="Enter meeting name"/>
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Meeting Date:
                        </label>
                        <input type="date" className="form-input mt-1 h-8 block w-full rounded border border-gray-400 text-sm pl-2" placeholder="Enter meeting date"/>
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Meeting Location:
                        </label>
                        <input type="text" className="form-input mt-1 h-8 block w-full rounded border border-gray-400 text-sm pl-2" placeholder="Enter meeting location"/>
                      </div>

                      <div className="flex justify-end">
                        <button type="submit" className="px-4 py-1.5 bg-[#1f1c2f] text-white rounded-md hover:bg-opacity-95 focus:outline-none focus:ring focus:ring-green-500">
                          Submit
                        </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            <br/>

            {/* SEARCH BAR */}
            <div>
              <input type="text" placeholder="Search" class="border border-[#1f1c2f] rounded-md mr-1 pl-4 pr-4 py-2 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 w-full md:w-80 text-black mb-2"/>
              <button type="button" className="px-4 py-2 bg-[#1f1c2f] text-white rounded-md focus:outline-none focus:bg-[#1f1c2f]">Search</button>
            </div>

            {/* CARD */}
            <div className="bg-paleWhite rounded-lg shadow-xl p-3 mt-2">
                <div className="flex justify-end">
                  <button className="flex bg-transparent border-none focus:outline-none mt-1 mr-1" onClick={toggleDropdown}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                  </button>
                  {/* DROPDOWN MENU */}
                  {isDropdownOpen && (
                    <div className="absolute right-60 mt-8">
                      <ul className="absolute w-48 bg-white shadow-xl rounded-md py-1 border-2 border-gray-150 focus:outline-none">
                        <li className="hover:bg-gray-100 px-4 py-1 cursor-pointer text-colorViolet">Alphabetically</li>
                        <li className="hover:bg-gray-100 px-4 py-1 cursor-pointer text-colorViolet">Latest</li>
                        <li className="hover:bg-gray-100 px-4 py-1 cursor-pointer text-colorViolet">Oldest</li>
                      </ul>
                    </div>
                  )}
                </div>

              <div className="ml-2 mr-2 flex flex-wrap justify-between">
                <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-start">
                  {/* INNER CARDS */}

                  {/* INNER CARD 1 */}
                  <div className="flex justify-center">
                    <div className="bg-white-200 border rounded-lg shadow-xl p-4 w-72 h-84 hover:bg-pink-200 transition duration-300">
                      {/* TWO ICONS */}
                      <div className="flex items-center justify-end w-full">
                        <button title="Edit">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1f1c2f" className="w-4 h-8 mr-0">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                          </svg>
                        </button>
                        <button title="Delete">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1f1c2f" className="w-4 h-8 ml-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                          </svg>
                        </button>
                      </div>
                      <div className="border-t border-gray-400 mt-4"></div>
                      {/* NAME */}
                      <div className="mt-4">
                        <span>
                          <a className="text-xs">NAME: </a>
                          <br/>
                          <a className="uppercase text-2xl font-name">Meeting1</a>
                        </span>
                      </div>
                      {/* DATE */}
                      <div className="mt-2">
                        <span>
                          <a className="text-xs">DATE: </a> 
                          <br/>
                          <a className="uppercase text-lg">01-01-2001</a>
                        </span>
                      </div>
                      {/* LOCATION */}
                      <div className="mt-2">
                        <span>
                          <a className="text-xs">LOCATION: </a> 
                          <br/>
                          <a className="uppercase text-lg">TLC</a>
                        </span>
                      </div>
                      <div className='mt-5'>
                        <Link href="/meetings/meeting1">
                          <button type="button" className="text-xs px-3 py-1.5 bg-[#1f1c2f] text-white rounded-md focus:outline-none focus:bg-[#1f1c2f]">Edit Notes</button>
                        </Link>
                      </div> 
                      <Link href="/meetings/attendance">
                       <button type="button" className="text-xs mt-2 mb-2 px-3 py-1.5 bg-[#1f1c2f] text-white rounded-md focus:outline-none focus:bg-[#1f1c2f]">View Attendance</button>
                       </Link>
                    </div>
                  </div>
                                    
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Meetings;
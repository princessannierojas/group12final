import React, { useState } from 'react';
import Header from '../../pages/header-and-sidebar/header';
import Sidebar from '../../pages/header-and-sidebar/sidebar';

const Attendance = () => {
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
                ATTENDANCE
              </p>
            </div>

            <br/>

            <div className="border-t-2 border-gray-400 mt-5 mb-9"></div>

            {/* ADD MEETING BUTTON */}
            <div className="flex justify-end mb-3">
                <button className="bg-white border border-[#1f1c2f] shadow-xl text-white font-bold py-1 px-3 rounded-lg" title="Edit">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1f1c2f" className="w-3.5 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                </svg>
              </button>
            </div>

            {/* TABLE */}
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200 rounded-2xl p-3">
                <thead>
                  <tr>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Address</th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Mobile Number</th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Attendance</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 whitespace-no-wrap">Abegail Abacano</td>
                    <td class="px-6 py-4 whitespace-no-wrap">Bacolod, Juban, Sorsogon</td>
                    <td class="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                    <td class="px-6 py-4 whitespace-no-wrap">abbyabacano@example.com</td>
                    <td class="px-6 py-4 whitespace-no-wrap">
                        <div class="ml-10">
                            <input type="checkbox" checked/>
                        </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-no-wrap">Felip Jhon Suson</td>
                    <td class="px-6 py-4 whitespace-no-wrap">Pagadian, Zamboanga del Sur</td>
                    <td class="px-6 py-4 whitespace-no-wrap">987-654-3210</td>
                    <td class="px-6 py-4 whitespace-no-wrap">fjsuson@example.com</td>
                    <td class="px-6 py-4 whitespace-no-wrap">
                        <div class="ml-10">
                            <input type="checkbox" disabled/>
                        </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-no-wrap">John Paulo Nase</td>
                    <td class="px-6 py-4 whitespace-no-wrap">Imus, Cavite</td>
                    <td class="px-6 py-4 whitespace-no-wrap">453-646-9219</td>
                    <td class="px-6 py-4 whitespace-no-wrap">jpnase@example.com</td>
                    <td class="px-6 py-4 whitespace-no-wrap">
                        <div class="ml-10">
                            <input type="checkbox" checked/>
                        </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-no-wrap">Harry Edward Styles</td>
                    <td class="px-6 py-4 whitespace-no-wrap">London, United Kingdom</td>
                    <td class="px-6 py-4 whitespace-no-wrap">321-654-9870</td>
                    <td class="px-6 py-4 whitespace-no-wrap">hestyles@example.com</td>
                    <td class="px-6 py-4 whitespace-no-wrap">
                        <div class="ml-10">
                            <input type="checkbox" checked/>
                        </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Attendance;
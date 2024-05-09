import React, { useState } from 'react';
import Header from '../../pages/header-and-sidebar/header';
import Sidebar from '../../pages/header-and-sidebar/sidebar';

const Members = () => {
  const [isActive, setIsActive] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
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
                MEMBERS
              </p>
            </div>

            <br/>

            {/* ADD MEMBER BUTTON */}
            <div className="flex justify-end">
              <button className="bg-[#1f1c2f] shadow-xl hover:bg-black text-white font-bold py-2 px-8 rounded-lg hover:bg-black" 
              title="Add Meeting" onClick={toggleForm}>
                Add Member
              </button>
            </div>

            {/* FORM */}
            {isFormOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-xl relative w-full sm:w-[500px] h-[450px]">                  <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={toggleForm}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <h2 className="text-xl text-colorViolet font-bold mb-2 mt-4">Add Member</h2>
                    <div className="border-t border-gray-400 mb-4"></div>
                    <form>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Name:
                        </label>
                        <input
                          type="text"
                          className="form-input mt-1 h-8 block w-full rounded border border-gray-400 text-sm pl-2"
                          placeholder="Enter name"
                        />
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Address:
                        </label>
                        <input
                          type="text"
                          className="form-input mt-1 h-8 block w-full rounded border border-gray-400 text-sm pl-2"
                          placeholder="Enter address"
                        />
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Mobile Number:
                        </label>
                        <input
                          type="text"
                          className="form-input mt-1 h-8 block w-full rounded border border-gray-400 text-sm pl-2"
                          placeholder="Enter mobile number"
                        />
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Email:
                        </label>
                        <input
                          type="text"
                          className="form-input mt-1 h-8 block w-full rounded border border-gray-400 text-sm pl-2"
                          placeholder="Enter email"
                        />
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="px-4 py-1.5 bg-[#1f1c2f] text-white rounded-md hover:bg-opacity-95 focus:outline-none focus:ring focus:ring-green-500"
                        >
                          Submit
                        </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            <br/>

            {/* TABLE */}
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200 rounded-2xl p-3">
                <thead>
                  <tr>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Address</th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Mobile Number</th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 whitespace-no-wrap">Abegail Abacano</td>
                    <td class="px-6 py-4 whitespace-no-wrap">Bacolod, Juban, Sorsogon</td>
                    <td class="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                    <td class="px-6 py-4 whitespace-no-wrap">abbyabacano@example.com</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-no-wrap">Felip Jhon Suson</td>
                    <td class="px-6 py-4 whitespace-no-wrap">Pagadian, Zamboanga del Sur</td>
                    <td class="px-6 py-4 whitespace-no-wrap">987-654-3210</td>
                    <td class="px-6 py-4 whitespace-no-wrap">fjsuson@example.com</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-no-wrap">John Paulo Nase</td>
                    <td class="px-6 py-4 whitespace-no-wrap">Imus, Cavite</td>
                    <td class="px-6 py-4 whitespace-no-wrap">453-646-9219</td>
                    <td class="px-6 py-4 whitespace-no-wrap">jpnase@example.com</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-no-wrap">Harry Edward Styles</td>
                    <td class="px-6 py-4 whitespace-no-wrap">London, United Kingdom</td>
                    <td class="px-6 py-4 whitespace-no-wrap">321-654-9870</td>
                    <td class="px-6 py-4 whitespace-no-wrap">hestyles@example.com</td>
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

export default Members;
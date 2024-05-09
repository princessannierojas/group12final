import React from 'react';

const Header = ({ toggleSidebar }) => {
    return (
    <header className="bg-colorViolet text-white py-4 w-full">
        <div className="flex items-center justify-between px-5">
            {/* MENU BUTTON */}
            <button onClick={toggleSidebar} className="focus:outline-none text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </button>

            {/* NAME OF ORGANIZATION */}
            <div className="relative">
                <span className="text-white">NameOfOrganization</span>
            </div>
        </div>
    </header>
    );
};

export default Header;

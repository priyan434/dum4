import SideNavbar from '../../shared/components/SideNavbar';
import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import Footer from '../../shared/components/Footer';
import './styles.css';

const AdminLayout = () => {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <div className="flex flex-col h-screen">


      <div className="flex justify-between p-4 bg-gray-800 text-white">
        <div>Header</div>

        <div className="lg:hidden">
          <button
            aria-label="Toggle Sidebar"
            className="focus:outline-none text-white toggle-button"
            onClick={toggle}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-1 relative">


        <div
          className={`absolute h-full top-0 left-0 w-64 bg-gray-800 text-white transition-all duration-300 ease-in-out
            ${visible ? ' opacity-100' : ' opacity-0'} 
            lg:relative lg:block lg:w-64  lg:opacity-100`}
        >
          <SideNavbar />
        </div>


        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default AdminLayout;

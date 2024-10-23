// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/admin/sidebar'

const Layout = () => {
    return (
        <div className="flex lg:flex-row flex-col  min-h-screen font-serif">
            <div className='lg:w-[20%] border-r dark:border-gray-800'><Sidebar /></div>
            <div className="lg:w-[80%] lg:p-5">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
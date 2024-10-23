import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartPlusFill,BsFillCartDashFill } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaKey } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";


function Sidebar() {
    const menuItems = [
        { name: 'Dashboard', path: '/admin', icon: MdDashboard },
        { name: 'Purchase', path: '/admin/purchase', icon: BsFillCartPlusFill },
        { name: 'Sell', path: '/admin/sell', icon: BsFillCartDashFill },
        { name: 'Farmers List', path: '/admin/farmers', icon: FaClipboardList },
        { name: 'Bills', path: '/admin/about', icon: RiMoneyRupeeCircleFill },
        { name: 'other', path: '/admin/about', icon: FaKey },
        { name: 'Settings', path: '/admin/settings', icon: IoSettingsSharp },
        { name: 'About', path: '/admin/about', icon: FaKey },
    ];

    return (
        <>
            {/* for lg screen  */}
            <div className='flex flex-col my-5 font-serif'>
                <div className='flex flex-col items-center pb-5 border-b dark:border-gray-800'>
                    <img src="/shiva.png" alt="admin-photo" className='dark:invert w-24 border rounded-full p-2' />
                    <p>Admin Name</p>
                </div>
                <ul className=''>
                    {menuItems.map(({ name, path, icon: Icon }, index) => (
                        <li key={index} className='flex items-center border-b dark:border-slate-800 p-4 cursor-pointer hover:dark:bg-slate-900 hover:dark:border-greenCustom  hover:bg-slate-100'>
                            <Link to={path} className='w-full flex items-center space-x-2 mx-5'>
                                <Icon className='text-xl md:mr-4' />
                                <span>{name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    );
}

export default Sidebar;

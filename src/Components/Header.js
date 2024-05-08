import YouTube_logo from '../images/youtubr-light.png';
import YouTUbe_Dark from '../images/youtube-dark.png'
import { GiHamburgerMenu } from "react-icons/gi";
import profile_Logo from '../images/profile.png';
import { useDispatch, useSelector } from 'react-redux';
import { TbSearch } from "react-icons/tb";
import React from 'react';
import { toggleDarkMode, toggleSideBar } from '../Utils/Store/stateSlice';
import { Sun, Moon } from 'react-feather';

const Header = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(store => store.state.darkMode);

    const handleSideBar = () => {
        dispatch(toggleSideBar());
    };

    const handleMode = () => {
        dispatch(toggleDarkMode());
    }

    return (
        <div className='w-full absolute top-0 z-30 bg-white dark:bg-neutral-900 dark:text-white'>
            <header className="flex justify-between items-center px-3 py-3 shadow border-b dark:border-[#cfcdcd3e]">
                {/* HamBurger and Logo */}
                <div className="flex gap-4 items-center sm:gap-2">
                    <button className="cursor-pointer p-2 rounded-full" onClick={() => handleSideBar()}>
                        <GiHamburgerMenu className="text-2xl sm:text-xl" />
                    </button>

                    <div>
                        <img src={darkMode ? YouTUbe_Dark : YouTube_logo} alt="Logo" className="w-28 sm:w-24" />
                    </div>
                </div>

                {/* Search Input */}
                <form action="" className="w-[45%] m-auto flex rounded-full sm:hidden">
                    <input type="text" placeholder="Search" className="text-[#2d2d2d] dark:bg-[#0007] dark:text-white text-lg w-11/12 border border-[#84848473] rounded-l-full py-1.5 pl-4 focus:outline-none"/>

                    <button className="border border-[#84848457] rounded-r-full py-1.5 pl-3 pr-4 bg-[#6d6d6d1f] hover:bg-[#58585828] dark:bg-[#45454518] dark:hover:bg-[#5858583b] "> <TbSearch className="text-2xl text-[#3f3f3fd2] dark:text-[#fff]" /> </button>
                </form>

                {/* Dark Mode and Profile pic */}
                <div className="flex gap-2 items-center sm:gap-1">

                    {/* Search Icon for small Screen */}
                    <div className="hidden cursor-pointer p-2 rounded-full dark:hover:bg-[#5858583b] hover:bg-[#58585828] sm:p-1 sm:block">
                        <TbSearch className="text-2xl" />
                    </div>
                    <div className="cursor-pointer p-2 rounded-full hover:bg-[#58585828] sm:p-1" onClick={handleMode}>
                        {darkMode ? <Sun /> : <Moon />}
                    </div>
                    <img src={profile_Logo} alt="Profile Pic" className="w-9" />
                </div>
            </header>
        </div>
    )
}

export default Header;

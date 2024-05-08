import { HiOutlineNewspaper } from "react-icons/hi2";
import { PiShoppingCartLight } from "react-icons/pi";
import { PiCertificateLight } from "react-icons/pi";
import { GiBabyfootPlayers } from "react-icons/gi";
import { MdOutlinePodcasts } from "react-icons/md";
import { PiFilmSlateLight } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import { IoIosTrendingUp } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { CiMusicNote1 } from "react-icons/ci";
import { RiLiveLine } from "react-icons/ri";
import { GiClothes } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { openSideBar, toggleSideBar } from '../Utils/Store/stateSlice';
import { Channel_List } from '../Utils/constants';

const Sidebar = () => {

    const showSideBar = useSelector(store => store.state.showSideBar);
    const dispatch = useDispatch();

    useEffect(() => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 680) {
            dispatch(openSideBar());
        }
    }, [dispatch]);

    const handleSideBar = () => {
        dispatch(toggleSideBar());
    }

    return (
        <>
            <div className={`hidden fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10 ${showSideBar ? 'sm:block' : 'sm:hidden'} transition-all`} onClick={handleSideBar}></div>
            <div className={`max-w-[210px] absolute max-h-screen h-[100vh] sm:z-20 sm:absolute ${showSideBar ? 'left-0' : 'left-[-220px]'} transition-all duration-300 bg-white dark:bg-neutral-900 dark:text-[#ffffff] dark:border-[#cfcdcd3e] border-r border-[#1313130c]  overflow-y-auto`}>

                <div className='py-3 px-3 font-sans border-b border-[#8c8c8c54] dark:border-[#cfcdcd6b] pt-[75px]'>
                    <div className=' flex gap-5 items-center justify-start text-lg font-normal dark:hover:bg-[#4747478d] hover:bg-[#18181815] px-3 py-1 rounded-lg cursor-pointer'>
                        <IoHomeOutline className='text-2xl' />
                        <h1>Home</h1>
                    </div>

                    <div className=' flex gap-5 items-center justify-start text-lg font-normal dark:hover:bg-[#4747478d] hover:bg-[#18181815] px-3 py-1 rounded-lg cursor-pointer'>
                        <IoIosTrendingUp className='text-2xl' />
                        <h1>Trending</h1>
                    </div>

                    <div className=' flex gap-5 items-center justify-start text-lg font-normal dark:hover:bg-[#4747478d] hover:bg-[#18181815] px-3 py-1 rounded-lg cursor-pointer'>
                        <PiShoppingCartLight className='text-2xl' />
                        <h1>Shopping</h1>
                    </div>

                    <div className=' flex gap-5 items-center justify-start text-lg font-normal dark:hover:bg-[#4747478d] hover:bg-[#18181815] px-3 py-1 rounded-lg cursor-pointer'>
                        <CiMusicNote1 className='text-2xl' />
                        <h1>Music</h1>
                    </div>

                    <div className=' flex gap-5 items-center justify-start text-lg font-normal dark:hover:bg-[#4747478d] hover:bg-[#18181815] px-3 py-1 rounded-lg cursor-pointer'>
                        <PiFilmSlateLight className='text-2xl' />
                        <h1>Films</h1>
                    </div>

                    <div className=' flex gap-5 items-center justify-start text-lg font-normal dark:hover:bg-[#4747478d] hover:bg-[#18181815] px-3 py-1 rounded-lg cursor-pointer'>
                        <RiLiveLine className='text-2xl' />
                        <h1>Live</h1>
                    </div>

                    <div className=' flex gap-5 items-center justify-start text-lg font-normal dark:hover:bg-[#4747478d] hover:bg-[#18181815] px-3 py-1 rounded-lg cursor-pointer'>
                        <SiYoutubegaming className='text-2xl' />
                        <h1>Gaming</h1>
                    </div>
                    <div className=' flex gap-5 items-center justify-start text-lg font-normal dark:hover:bg-[#4747478d] hover:bg-[#18181815] px-3 py-1 rounded-lg cursor-pointer'>
                        <HiOutlineNewspaper className='text-2xl' />
                        <h1>News</h1>
                    </div>
                    <div className=' flex gap-5 items-center justify-start text-lg font-normal dark:hover:bg-[#4747478d] hover:bg-[#18181815] px-3 py-1 rounded-lg cursor-pointer'>
                        <GiBabyfootPlayers className='text-2xl' />
                        <h1>Sports</h1>
                    </div>
                    <div className=' flex gap-5 items-center justify-start text-lg font-normal dark:hover:bg-[#4747478d] hover:bg-[#18181815] px-3 py-1 rounded-lg cursor-pointer'>
                        <PiCertificateLight className='text-2xl' />
                        <h1>Courses</h1>
                    </div>
                    <div className=' flex gap-5 items-center justify-start text-lg font-normal dark:hover:bg-[#4747478d] hover:bg-[#18181815] px-3 py-1 rounded-lg cursor-pointer'>
                        <GiClothes className='text-2xl' />
                        <h1>Fashion</h1>
                    </div>

                    <div className=' flex gap-5 items-center justify-start text-lg font-normal dark:hover:bg-[#4747478d] hover:bg-[#18181815] px-3 py-1 rounded-lg cursor-pointer'>
                        <MdOutlinePodcasts className='text-2xl' />
                        <h1>Podcast</h1>
                    </div>
                </div>

                <div className='relative'>
                    <h1 className='absolute top-0 px-4 bg-white dark:bg-neutral-900 py-2 w-full font-medium'>Subscriptions</h1>
                    <div className='py-3 px-3 font-sans pt-10'>
                        {Channel_List.map((channel, index) => (
                            <div key={index} className='flex gap-5 items-center justify-start text-lg font-normal dark:hover:bg-[#4747478d] hover:bg-[#18181815] px-3 py-1 rounded-lg cursor-pointer'>
                                <img className='w-8 rounded-full' src={channel.link} alt="img_Channel" />
                                <h1 className='w-full truncate'>{channel.name}</h1>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sidebar;

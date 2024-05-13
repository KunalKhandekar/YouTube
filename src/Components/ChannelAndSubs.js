import React from 'react';
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";
import { PiShareFatBold } from "react-icons/pi";
import { viewCountFunction } from '../Utils/Functions';
import { toast } from 'react-toastify';

const ChannelAndSubs = ({ profile, name, likes, subs }) => {

    const toastNotification = () =>{
        toast.error('Feature unavailable now!')
    }

    return (
        <>
            {/* Subscribe and Like container */}
            < div className='py-3' >

                {/* Channel logo and subscribue button */}
                < div className='flex justify-between items-center lg:flex-col gap-2 lg:items-stretch' >
                    {/* channel info */}
                    <div div className='flex gap-5 items-center lg:justify-between' >
                        <div className='flex gap-3 items-center'>
                            <img src={profile} className='w-10 rounded-full' alt=" " />

                            <div className=''>
                                <h1 className='text-lg font-medium sm:text-sm truncate'>{name}</h1>
                                <p className='text-sm font-normal text-neutral-500 sm:text-xs truncate'>{viewCountFunction(subs)} subscribers</p>
                            </div>

                        </div>

                        <div className='flex items-center gap-1 text-2xl lg:text-lg py-2 px-5 dark:bg-white dark:text-black bg-[#cfcdcd3e] rounded-full font-medium cursor-pointer hover:bg-[#7070703e] dark:hover:bg-[#ffffff8e]' onClick={toastNotification}>
                            <span className='text-base sm:text-xs'>Subscribe</span>
                        </div>
                    </div >

                    {/* Likes/ Download/ Share */}
                    <div div className='flex items-center gap-3 text-2xl lg:text-lg flex-wrap sm:text-lg' >
                        <div className='flex items-center gap-2  bg-[#cfcdcd3e] rounded-full py-1 px-5 sm:px-3 hover:bg-[#7070703e]' onClick={toastNotification}>
                            <div className='flex items-center gap-1 font-medium cursor-pointer'>
                                <AiOutlineLike />
                                <span className='text-base sm:text-sm xsm:text-xs'>{viewCountFunction(likes)}</span>
                            </div>
                            <span>|</span>
                            <div className='cursor-pointer'><AiOutlineDislike /></div>

                        </div>

                        <div className='flex items-center gap-1 py-2 px-5 bg-[#cfcdcd3e] rounded-full font-medium sm:px-3 cursor-pointer hover:bg-[#7070703e]' onClick={toastNotification}>
                            <IoMdDownload />
                            <span className='text-base sm:text-xs'>Download</span>
                        </div>

                        <div className='flex items-center gap-1 py-2 px-5 bg-[#cfcdcd3e] rounded-full font-medium sm:px-3 cursor-pointer hover:bg-[#7070703e]' onClick={toastNotification}>
                            <PiShareFatBold />
                            <span className='text-base sm:text-xs '>Share</span>
                        </div>
                    </div >

                </div >
            </div >
        </>
    )
}

export default ChannelAndSubs

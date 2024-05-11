import React, { useEffect, useState } from 'react';
import { YOUTUBE_API } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeSideBar } from '../Utils/Store/stateSlice';
import { formatDuration, timeAgo, viewCountFunction } from '../Utils/Functions';


const VideoCard = ({ video }) => {
    const dispatch = useDispatch();
    const [profile_pic, setProfile_Pic] = useState(null);
    const { channelId, title, channelTitle, publishedAt } = video?.snippet;
    const [viewCount, setViewCount] = useState('');
    const [duration, setDuration] = useState('');

    const thumbnail = `https://i.ytimg.com/vi/${video.id.videoId || video.id}/maxresdefault.jpg`;

    const fetchProfilePic = async (id) => {
        const data = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${YOUTUBE_API()}&hl=en`);
        const json = await data.json();
        setProfile_Pic(json.items[0].snippet.thumbnails.default.url || json.items[0].snippet.thumbnails.medium.url);
    };

    useEffect(() => {
        fetchProfilePic(channelId);
    }, [channelId]);

    useEffect(() => {
        const fetchTopicVideoDetails = async () => {
            try {
                const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${video.id.videoId||video.id}&key=${YOUTUBE_API()}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch video details');
                }
                const data = await response.json();
                if (data.items.length > 0) {
                    setViewCount(data.items[0].statistics.viewCount);
                    setDuration(data.items[0].contentDetails.duration);
                } else {
                    throw new Error('Video details not found');
                }
            } catch (error) {
                console.error('Error fetching video details:', error);
            }
        };
    
        fetchTopicVideoDetails();
    }, [video]);
    
    const closeSideBarFunc = () => {
        dispatch(closeSideBar());
    };

    return (
        <Link to={`/watch?v=${video.id.videoId||video.id}`} className='pb-4 sm:pb-3' onClick={closeSideBarFunc}>
            <div className='relative'>
                <div className={`px-1.5 py-0.5 ${duration != 'P0D' ? 'bg-[#1c1c1cd4]' : 'bg-[#fc1d1dd4]'} text-white rounded text-xs font-medium absolute bottom-1.5 right-1.5`}>{formatDuration(duration)}</div>
                <img src={thumbnail} alt="Video_Card" className='w-full h-full object-cover rounded-lg' />
            </div>

            {/* Video Info */}
            <div className='flex gap-2 pt-2 mmd:gap-4 mmd:pt-3 sm:pt-2 sm:gap-2'>
                <div className='w-10 2xl:w-12 lg:w-14 mmd:w-20 sm:w-12'>
                    <img src={profile_pic} alt="Channel_Logo" className='w-full rounded-full' />
                </div>

                <div className='w-[90%]'>
                    {/* Title */}
                    <p className='line-clamp-2 text-base font-medium dark:text-white mmd:text-xl sm:text-sm'>{title}</p>

                    {/* Channel Name */}
                    <p className='text-sm text-neutral-600 font-normal dark:text-neutral-400 mmd:text-lg sm:text-xs ssm:hidden'>{channelTitle}</p>
                    <p className='text-sm text-neutral-600 font-normal dark:text-neutral-400 mmd:text-lg sm:text-xs ssm:hidden'>
                        {viewCountFunction(viewCount)} • {timeAgo(publishedAt)}
                    </p>

                    <p className='hidden text-sm text-neutral-600 font-normal dark:text-neutral-400 mmd:text-lg sm:text-xs ssm:block pt-1'>{channelTitle} • {viewCountFunction(viewCount)} • {timeAgo(publishedAt)}</p>
                </div>
            </div>
        </Link>
    )
}

export default VideoCard;
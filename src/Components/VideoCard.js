import React, { useEffect, useState } from 'react';

const VideoCard = ({ video }) => {
    const [profile_pic, setProfile_Pic] = useState(null);
    const { channelId, thumbnails, title, channelTitle, publishedAt } = video?.snippet;
    const { viewCount } = video.statistics;
    const { duration } = video.contentDetails;

    function formatDuration(duration) {
        const hours = parseInt(duration.match(/(\d+)H/)?.[1]) || 0;
        const minutes = parseInt(duration.match(/(\d+)M/)?.[1]) || 0;
        const seconds = parseInt(duration.match(/(\d+)S/)?.[1]) || 0;

        const formattedTime = [];
        if (hours > 0) formattedTime.push(String(hours).padStart(1, '0'));
        minutes === 0 ? formattedTime.push(String(minutes).padStart(2, '0')) : formattedTime.push(String(minutes).padStart(1, '0'));
        formattedTime.push(String(seconds).padStart(2, '0'));

        return formattedTime.join(':');
    };

    function timeAgo(publishDate) {
        const intervals = [
            { label: 'year', seconds: 31536000 },
            { label: 'month', seconds: 2592000 },
            { label: 'week', seconds: 604800 },
            { label: 'day', seconds: 86400 },
            { label: 'hour', seconds: 3600 },
            { label: 'minute', seconds: 60 },
            { label: 'second', seconds: 1 }
        ];

        const seconds = Math.floor((new Date() - new Date(publishDate)) / 1000);

        for (const interval of intervals) {
            if (seconds >= interval.seconds) {
                const intervalCount = Math.floor(seconds / interval.seconds);
                return `${intervalCount} ${interval.label}${intervalCount === 1 ? '' : 's'} ago`;
            }
        }

        return `${seconds} second${seconds === 1 ? '' : 's'} ago`;
    };

    const fetchVideo = async (id) => {
        const data = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=AIzaSyDMAjY5eRc2lq3YGsnr_uJ-PDlc5TwCqkA&hl=en`);
        const json = await data.json();
        setProfile_Pic(json.items[0].snippet.thumbnails.high.url);
    };

    useEffect(() => {
        fetchVideo(channelId);
    }, [channelId]);

    const viewCountFunction = (views) => {
        if (views >= 1000000) {
            return (views % 1000000 === 0 ? views / 1000000 : Math.round((views / 1000000) * 10) / 10) + 'M';
        } else if (views >= 1000) {
            return (views % 1000 === 0 ? views / 1000 : Math.round((views / 1000) * 10) / 10) + 'K';
        } else {
            return views.toString();
        };
    };

    if (!profile_pic) return null;

    console.log(video);

    return (
        <div className='pb-4 sm:pb-3'>
            <div className='relative'>
                <div className='px-1.5 py-0.5 bg-[#1c1c1cd4] text-white rounded text-xs font-medium absolute bottom-1.5 right-1.5'>{formatDuration(duration)}</div>
                <img src={thumbnails.maxres.url} alt="Video_Card" className='w-full h-full object-cover rounded-lg' />
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
        </div>
    )
}

export default VideoCard

import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';

const VideoContainer = () => {
    const [videos, setVideos] = useState(null);

    const fetchVideo = async () => {
        const data = await fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=12&key=AIzaSyDMAjY5eRc2lq3YGsnr_uJ-PDlc5TwCqkA&hl=en');
        const json = await data.json();
        setVideos(json?.items);
    };

    useEffect(() => {
        fetchVideo();
    }, []);

    if (!videos) return null;


    return (
        <div className='grid grid-cols-4 gap-3 justify-center items-start p-3 2xl:grid-cols-3 lg:grid-cols-2 mmd:grid-cols-1 sm:grid-cols-2 ssm:grid-cols-1'>
            {/* Render 12 VideoCard components */}
            {videos.map((video, index)=>(
                <VideoCard video={video} key={index}  />
            ))}
        </div>
    );
};

export default VideoContainer;

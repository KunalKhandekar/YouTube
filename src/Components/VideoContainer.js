import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { YOUTUBE_API } from '../Utils/constants';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
    const activeTopic = useSelector(store => store.state.activeTopic);
    const [videos, setVideos] = useState(null);

    const fetchVideo = async () => {
        if (activeTopic == 'Home') {
            const data = await fetch(`https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&part=snippet,contentDetails,statistics&regionCode=IN&maxResults=12&key=${YOUTUBE_API}&hl=en`);
            const json = await data.json();
            setVideos(json?.items);
        } else {
            const data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(activeTopic)}&type=video&maxResults=8&key=${YOUTUBE_API}`);
            const json = await data.json();
            setVideos(json?.items);
        }
    };


    useEffect(() => {
        fetchVideo();
    }, [activeTopic]);

    if (!videos) return <div className='text-white'>Loading...</div>;


    return (
        <div className='grid grid-cols-4 gap-3 justify-center items-start p-3 2xl:grid-cols-3 lg:grid-cols-2 mmd:grid-cols-1 sm:grid-cols-2 ssm:grid-cols-1'>
            {/* Render 12 VideoCard components */}
            {videos.map((video, index) => (
                <VideoCard video={video} key={index} isTopic={activeTopic == 'Home' ? true : false }/>
            ))}
        </div>
    );
};

export default VideoContainer;

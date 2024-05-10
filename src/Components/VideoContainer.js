import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { YOUTUBE_API } from '../Utils/constants';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
    const activeTopic = useSelector(store => store.state.activeTopic);
    const [videos, setVideos] = useState(null);

    const currentDate = new Date();
    const [startDateStr, endDateStr] = [
        new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).toISOString(),
        new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).toISOString()
    ];

    const fetchVideo = async () => {
        try {
            let apiUrl = '';
            if (activeTopic.includes('search')) {
                const reconstructTopic = activeTopic.replace('search','');
                apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${reconstructTopic}&type=video&maxResults=8&key=${YOUTUBE_API()}`
            } else if (activeTopic.length === 24) {
                apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API()}&order=date&part=snippet&channelId=${activeTopic}&type=video&maxResults=8`
            } else if (activeTopic === 'Home' || activeTopic === 'All') {
                apiUrl = `https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&part=snippet,contentDetails,statistics&regionCode=IN&maxResults=12&key=${YOUTUBE_API()}&hl=en`;
            } else if (activeTopic === 'Live') {
                apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API()}&part=snippet&q=${activeTopic}&type=video&maxResults=8&eventType=live`;
            } else {
                apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(activeTopic)}&publishedAfter=${startDateStr}&publishedBefore=${endDateStr}&type=video&maxResults=8&key=${YOUTUBE_API()}`;
            }
            
            const data = await fetch(apiUrl);
            if (!data.ok) {
                throw new Error('Failed to fetch videos');
            }
            const json = await data.json();
            setVideos(json?.items);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    useEffect(() => {
        fetchVideo();
    }, [activeTopic]);

    if (!videos) return <div className='text-white'>Loading...</div>;

    return (
        <div className='grid grid-cols-4 gap-3 justify-center items-start p-3 2xl:grid-cols-3 lg:grid-cols-2 mmd:grid-cols-1 sm:grid-cols-2 ssm:grid-cols-1'>
            {/* Render VideoCard components */}
            {videos.map((video, index) => (
                <VideoCard video={video} key={index}  />
            ))}
        </div>
    );
};

export default VideoContainer;

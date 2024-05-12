import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const WatchVideoContainer = ({ Id }) => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const shouldBeFixed = scrollPosition > 1; // Change this threshold as needed
            setIsFixed(shouldBeFixed);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`py-2 mmd:py-0 w-full mmd:mt-${isFixed ? '0' : ''} ${isFixed ? 'mmd:fixed top-0' : ''} z-[2] transition-all`}>
                <ReactPlayer
                    className="w-full aspect-video"
                    url={`https://www.youtube.com/embed/${Id}?rel=0`}
                    playing={true}
                    muted={false}
                    width='100%'
                    height='100%'
                    controls={true}
                />
            </div>
        </>
    );
};

export default WatchVideoContainer;

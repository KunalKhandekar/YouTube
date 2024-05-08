import { useRef, useState } from 'react';

const TopicContainer = () => {

    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust the sensitivity of dragging
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const CapsuleTopics = ['All', 'Disha Vakani', 'TMKOC', 'Computer Programming', 'Music', 'Cricket', 'Politics', 'Animated Films', 'Movies', 'Study', 'Gaming', 'Sports'];

    return (
        <div
            ref={containerRef}
            className='px-4 py-3 text-base overflow-x-auto w-full whitespace-nowrap cursor-grab'
            style={{ 'msOverflowStyle': 'none', 'scrollbarWidth': 'none' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            {CapsuleTopics.map((name, index) => (
                <span key={index} className='inline-block mr-3 px-5 py-1 bg-[#8b8b8b2c] dark:bg-[#4747478d] dark:hover:bg-[#474747fe] font-normal dark:text-white text-black rounded-xl select-none cursor-pointer hover:bg-[#8b8b8b87] text-sm'>{name}</span>
            ))}
        </div>
    );
};

export default TopicContainer;

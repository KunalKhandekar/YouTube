import { useRef, useState } from 'react';

const Topic_Container = () => {

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
            className='pb-3 text-base overflow-x-auto w-full whitespace-nowrap cursor-grab border-b border-[#4e4e4e3b]'
            style={{ 'msOverflowStyle': 'none', 'scrollbarWidth': 'none' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            {CapsuleTopics.map((name, index) => (
                <span key={index} className='inline-block mr-3 px-5 py-1 bg-[#8b8b8b2c] text-black rounded-xl select-none cursor-pointer hover:bg-[#8b8b8b87]'>{name}</span>
            ))}
        </div>
    );
};

export default Topic_Container;

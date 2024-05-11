import { YOUTUBE_API } from "./constants";

export const formatDuration = (duration) => {
    if (duration === 'P0D') return 'Live';
    const hours = parseInt(duration.match(/(\d+)H/)?.[1]) || 0;
    const minutes = parseInt(duration.match(/(\d+)M/)?.[1]) || 0;
    const seconds = parseInt(duration.match(/(\d+)S/)?.[1]) || 0;

    const formattedTime = [];
    if (hours > 0) formattedTime.push(String(hours).padStart(1, '0'));
    minutes === 0 ? formattedTime.push(String(minutes).padStart(2, '0')) : formattedTime.push(String(minutes).padStart(1, '0'));
    formattedTime.push(String(seconds).padStart(2, '0'));
    return formattedTime.join(':');
};

export const timeAgo = (publishDate) => {
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

export const viewCountFunction = (views) => {
    if (views === undefined) {
        return '0'
    } else if (views >= 1000000) {
        return (views % 1000000 === 0 ? views / 1000000 : Math.round((views / 1000000) * 10) / 10) + 'M';
    } else if (views >= 1000) {
        return (views % 1000 === 0 ? views / 1000 : Math.round((views / 1000) * 10) / 10) + 'K';
    } else {
        return views.toString();
    };
};

export const renderClickableLinks = (text) => {
    // Regular expression to match URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    // Split the text by URLs and replace them with anchor tags
    return text.split(urlRegex).map((part, index) => {
        if (part.match(urlRegex)) {
            return <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-500">{part}</a>;
        } else {
            return part;
        }
    });
};
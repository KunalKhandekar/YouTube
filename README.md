

# YouTube Video Viewer

YouTube Video Viewer is a React application designed to provide users with a seamless experience for browsing and watching YouTube videos. With features like fetching video details, displaying video cards, and suggesting related videos, users can easily discover and enjoy content tailored to their interests.

## Features

- **Video Card Display**: The application showcases video cards featuring thumbnails, titles, channel names, view counts, and published dates.
- **Video Playback**: Users can watch videos directly within the application using the integrated ReactPlayer component.
- **Channel Subscription**: Users can subscribe to channels directly from the video cards. [Functionality Not Added]
- **Like, Download, and Share**: Users can interact with videos by liking, downloading, and sharing them. [Functionality Not Added]
- **Responsive Design**: The application is designed to adapt to different screen sizes, providing a consistent experience across devices.

## Technologies Used

- **React**: The frontend of the application is built using React, a popular JavaScript library for building user interfaces.
- **Redux**: Redux is used for state management, allowing efficient management of application data.
- **React Router**: React Router is used for client-side routing, enabling navigation between different views within the application.
- **React Player**: React Player is integrated for seamless video playback within the application.
- **YouTube Data API**: The application fetches video and channel data from the YouTube Data API to display relevant information to users.

## Folder Structure

```
YouTube-Video-Viewer/
│
├── public/             # Public assets and index.html
│
├── src/                # Source code directory
│   ├── components/     # React components
│   │   ├── VideoCard/      # Component for displaying video cards
│   │   ├── VideoContainer/ # Component for video container
│   │   ├── TopicContainer/ # Component for topic container
│   │   ├── ChannelAndSubs/ # Component for channel details and subscriptions
│   │   ├── VideoInfoBox/   # Component for displaying video information
│   │   ├── VideoSuggestion/ # Component for suggesting related videos
│   │   └── WatchVideoContainer/ # Component for watching videos
│   │
│   ├── Utils/          # Utility functions and constants
│   │   ├── Functions.js    # Utility functions for formatting data
│   │   ├── constants.js    # Constants such as API keys and endpoints
│   │   └── Store/          # Redux store setup and slices
│   │       └── stateSlice.js # Redux slice for managing application state
│   │
│   ├── images/         # Image assets
│   │
│   ├── App.css         # Global styles
│   ├── App.js          # Main application component
│   ├── index.css       # Styles for index.html
│   └── index.js        # Entry point for the application
│
├── package.json        # Package configuration and dependencies
├── README.md           # Project README file
└── LICENSE             # License file
```

## Setup

1. Clone the repository: `git clone https://github.com/your-username/YouTube-Video-Viewer.git`
2. Navigate to the project directory: `cd YouTube-Video-Viewer`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and navigate to `http://localhost:3000` to view the application.

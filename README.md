```markdown
# YouTube Clone Project

This project is a YouTube clone developed using React, Redux, and the YouTube Data API. It aims to replicate some of the core functionalities of the popular video-sharing platform YouTube.

## Features

### 1. Video Viewing
- Users can watch videos from various channels.
- Video details such as title, channel name, view count, and publish date are displayed.
- Video duration is shown on the thumbnail.
- Thumbnail images are fetched from the YouTube API.

### 2. Video Suggestions
- Suggested videos are displayed based on the currently watched video.
- Random popular videos are fetched to fill the suggestion list.
- Suggestions are refreshed upon changing the video.

### 3. Video Search
- Users can search for videos using the search bar.
- Search results are displayed dynamically as the user types.
- Relevant videos are fetched from the YouTube API based on the search query.

### 4. Topic Navigation
- Users can navigate through different topics to explore related videos.
- Topic containers dynamically load videos based on the selected topic.
- Topics include popular videos, live videos, and user-defined topics.

### 5. Responsive Design
- The application is responsive and adjusts layout based on screen size.
- Supports various devices including desktops, tablets, and mobile phones.

### 6. Subscription
- Users can subscribe to channels to receive updates on new videos.
- Subscribed channels are displayed with their subscriber count.

### 7. Like, Dislike, Download, and Share
- Users can interact with videos by liking, disliking, downloading, and sharing.
- Like and dislike counts are displayed for each video.

### 8. Comment Threads
- Users can view and engage in comment threads associated with videos.
- Comments are fetched from the YouTube API and displayed in a threaded format.

## Folder Structure

```
src/
│
├── components/
│   ├── ChannelAndSubs.js
│   ├── CommentThread.js
│   ├── MainContainer.js
│   ├── TopicContainer.js
│   ├── VideoCard.js
│   ├── VideoContainer.js
│   ├── VideoInfoBox.js
│   ├── VideoSuggestion.js
│   └── WatchVideoContainer.js
│
├── images/
│   └── video-placeholder.png
│
├── Utils/
│   ├── Functions.js
│   ├── Store/
│   │   └── stateSlice.js
│   └── constants.js
│
├── App.js
├── index.js
└── README.md
```

- **components/**: Contains all React components used in the application.
- **images/**: Stores images used in the project, including placeholder images.
- **Utils/**: Contains utility files such as functions, constants, and Redux store configuration.
  - **Functions.js**: Includes helper functions used throughout the application.
  - **Store/**: Stores Redux state management files.
    - **stateSlice.js**: Defines Redux slice for managing application state.
  - **constants.js**: Defines constants such as API keys and endpoints.
- **App.js**: Main entry point of the React application.
- **index.js**: Entry point for rendering the React application.
- **README.md**: Project documentation file.

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server with `npm start`.
5. Access the application in your web browser at `http://localhost:3000`.

## Contributors

- [Your Name]
- [Contributor 1]
- [Contributor 2]

## License

This project is licensed under the [MIT License](LICENSE).
``` 

const video = document.getElementById('videoPlayer');

// Example: Log when the video starts playing
video.addEventListener('play', () => {
    console.log('Video is now playing');
});

// Example: Log when the video is paused
video.addEventListener('pause', () => {
    console.log('Video is paused');
});

const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const playicon = playBtn.querySelector("i");
const muteBtn = document.getElementById("mute");
const muteicon = muteBtn.querySelector("i");
const currentTime = document.getElementById("currenTime");
const totalTime = document.getElementById("totalTime");
const volumeRange = document.getElementById("volume");
const timeline = document.getElementById("timeline");
const fullScreenBtn = document.getElementById("fullScreen");
const fullScreenicon = fullScreenBtn.querySelector("i");
const videoContainer = document.getElementById("videoContainer");
const videoControls = document.getElementById("videoControls");

const formatTime = (seconds) =>
  new Date(seconds * 1000).toISOString().substr(11, 8);

let controlsMovementTimeout = null;
let controlsTimeout = null;
let volumeValue = 0.5;
video.volume = volumeValue;

const handlePlayClick = (e) => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  playicon.classList = video.paused ? "fas fa-play" : "fas fa-pause";
};

const handleMuteClick = (e) => {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
  muteicon.classList = video.muted ? "fas fa-volume-mute" : "fas fa-volume-up";
  volumeRange.value = video.muted ? 0 : volumeValue;
};

const handleVolumeChange = (event) => {
  const {
    target: { value },
  } = event;
  if (video.muted) {
    video.muted = false;
    muteBtn.innerText = "Mute";
  }
  volumeValue = value;
  video.volume = value;
};

const handleLoad = () => {
    totalTime.innerText = formatTime(Math.floor(video.duration));
    timeline.max = Math.floor(video.duration);
};
const handleTime = () => {
    currentTime.innerText = formatTime(Math.floor(video.currentTime));
    timeline.value = Math.floor(video.currentTime);
}
const handleTimeline = (event) => {
    const {target: { value },
} = event;
    video.currentTime = value;

}

const handleFullscreen = () => {
    const fullscreen = document.fullscreenElement;
    if(fullscreen) {
        document.exitFullscreen();
        fullScreenicon.classList = "fas fa-expand";
    } else {
        videoContainer.requestFullscreen();
        fullScreenicon.classList = "fas fa-compress";
        
    }
 
}

const hideControls = () =>  videoControls.classList.remove("showing");

const handleMouseMove = () => {
    if (controlsTimeout) {
        clearTimeout(controlsTimeout);
        controlsTimeout = null;
    }
    if (controlsMovementTimeout) {
        clearTimeout(controlsMovementTimeout);
        controlsMovementTimeout = null;
    }
    videoControls.classList.add("showing");
    controlsMovementTimeout =  setTimeout(hideControls, 3000)
    
}

const handleMouseLeave = () => {
    controlsTimeout = setTimeout(hideControls, 3000);
    }
    

    const handleEnded = () => {
        const { id } = videoContainer.dataset;
        fetch(`/api/videos/${id}/view`, {
          method: "POST",
        });
      };
      
video.addEventListener("ended", handleEnded)
playBtn.addEventListener("click", handlePlayClick);
muteBtn.addEventListener("click", handleMuteClick);
volumeRange.addEventListener("input", handleVolumeChange);
video.addEventListener("loadedmetadata", handleLoad);
video.addEventListener("timeupdate", handleTime)
timeline.addEventListener("input", handleTimeline);
fullScreenBtn.addEventListener("click", handleFullscreen);
videoContainer.addEventListener("mousemove", handleMouseMove);
videoContainer.addEventListener("moustleave", handleMouseLeave);
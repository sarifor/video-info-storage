const video = document.querySelector("video");
const videoController = document.getElementById("videoController");
const psBtn = videoController.querySelector("#playPauseBtn");
const volumeBtn = videoController.querySelector("#volume");
const volumeRange = videoController.querySelector("#volumeRange");
const time = videoController.querySelector("#time");
const timeline = videoController.querySelector("#timeline");
const fs = videoController.querySelector("#fullScreen");


let volumeValue = 0.5;
video.volume = volumeValue;

const updateTime = () => {
  time.innerHTML = video.currentTime;
};

const handleLoadedMetadata = () => {
  timeline.max = video.duration;
  console.log(timeline.max);
};

const handlePlayAndStop = () => {
  if (video.paused) {
    video.play();
    psBtn.className = "fas fa-pause";
  } else {
    video.pause();
    psBtn.className = "fas fa-play";
  }
};

const handleSound = () => {
  if (video.muted) {
    video.muted = false;
    volumeRange.value = volumeValue;
    volumeBtn.className = "fas fa-volume-up";
  } else {
    video.muted = true;
    volumeRange.value = 0;
    volumeBtn.className = "fas fa-volume-mute";
  }
};

const handleVolume = (event) => {
  const {
    target: { value }
  } = event;
  if (video.muted) {
    video.muted = false;
    volumeBtn.className = "fas fa-volume-mute";
  }
  if (value === "0") {
    volumeBtn.className = "fas fa-volume-off";
  } else {
    volumeBtn.className = "fas fa-volume-up";
  }
  video.volume = volumeValue = value;
};

const handleTimeChange = (event) => {
  const { target: { value } } = event;
  video.currentTime = value;
};

const handleFullScreen = () => {
  const fullscreen = document.fullscreenElement;
  if (fullscreen) {
    document.exitFullscreen();
  } else {
    videoController.requestFullscreen();
  }
};

const handleKeyDown = (event) => {
  const { key } = event;
  if (key === "f") {
    handleFullScreen();
  } else if (key === " ") {
    handlePlayAndStop();
  } else if (key === "Escape") {
    const fullscreen = document.fullscreenElement;
    if (fullscreen === null) {
      alert("Please use ESC only when the video is fullscreen :)");
    } else {
      document.exitFullscreen();
    };
  };

};

video.addEventListener("loadeddata", handleLoadedMetadata);
video.ontimeupdate = () => {
  updateTime();
};
video.addEventListener("ontimeupdate", updateTime);
timeline.addEventListener("input", handleTimeChange);
psBtn.addEventListener("click", handlePlayAndStop);
volumeBtn.addEventListener("click", handleSound);
volumeRange.addEventListener("input", handleVolume);
fs.addEventListener("click", handleFullScreen);
window.addEventListener("keydown", handleKeyDown);
const startBtn = document.getElementById("startBtn");
const audio = document.getElementById("preview");

let stream;
let recorder;
let audioFile;

const startDownload = () => {
    const a = document.createElement("a");
    a.href = audioFile;
    a.download = "Audio.mp4";
    document.body.appendChild(a);
    a.click();
};

const stopRecording = () => {
    startBtn.innerText = "Download Recording";
    startBtn.removeEventListener("click", stopRecording);
    startBtn.addEventListener("click", startDownload);
    
    recorder.stop();
};

const startRecording = () => {
    startBtn.innerText = "Stop Recording";
    startBtn.removeEventListener("click", startRecording);
    startBtn.addEventListener("click", stopRecording);
    
    recorder = new MediaRecorder(stream);
    recorder.ondateavailable = (event) => {
        audioFile = URL.createObjectURL(event.data);
        audio.srcObject = null;
        audio.play;
    }
    recorder.start();
};

const init = async () => {
    stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
    });
    audio.srcObject = stream; // srcObject라는 속성은 없는 거 아냐?
    audio.play; // vs. video.play() ?
};

init();

startBtn.addEventListener('click', startRecording);
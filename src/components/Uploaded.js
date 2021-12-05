import React from 'react';
import WaveSurfer from 'react-wavesurfer';
import './Uploaded.css';
import wavesurfer from 'wavesurfer.js';


function Uploaded (){

    var duration = document.querySelector("#duration");
    var current = document.querySelector("#current");
    var playPause = document.querySelector("#playPause");

    var timeCalculator = function (value) {
        var second = Math.floor(value % 60);
        var minute = Math.floor((value / 60) % 60);
    
    if (second < 10) {
        second = "0" + second;
    }

    return minute + ":" + second;
};

//start wavesurfer object 
wavesurfer = WaveSurfer.create({
    container: "#wave",
    waveColor: "#cdedff",
    progressColor: "#1AAFFF",
    height: 48,
    scrollParent: false
});

//load audio file
wavesurfer.load("//localhost:3002/SameNameForAnyFileUploaded.mp3");

//play and pause a player
playPause.addEventListener("click", function (e) {
    wavesurfer.playPause();
});

//load audio duration on load
wavesurfer.on("ready", function (e) {
    duration.textContent = timeCalculator(wavesurfer.getDuration());
});

//get updated current time on play
wavesurfer.on("audioprocess", function (e) {
    current.textContent = timeCalculator(wavesurfer.getCurrentTime());
});

//change play button to pause on plying
wavesurfer.on("play", function (e) {
    playPause.classList.remove("fi-rr-play");
    playPause.classList.add("fi-rr-pause");
});

//change pause button to play on pause
wavesurfer.on("pause", function (e) {
    playPause.classList.add("fi-rr-play");
    playPause.classList.remove("fi-rr-pause");
});

//update current time on seek
wavesurfer.on("seek", function (e) {
    current.textContent = timeCalculator(wavesurfer.getCurrentTime());
});

    return(
        <div className="player">
        <div className="thumb">
          <img src="./Parallax.png" alt="" />
        </div>
        <div className="info">
          <div className="detail">
            <div className="title">
              TheFatRat - Upwind
              <div className="time">
                <span id="current">0:00</span> 
                <span id="duration">0:00</span>
              </div>
            </div>
            <div className="control">
              <i className="fi-rr-play" id="playPause"></i>
            </div>
          </div>
          <div id="wave"></div>
        </div>
      </div>
    )
}
























export default Uploaded;
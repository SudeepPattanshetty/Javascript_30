const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const skipButton = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');

function togglePlay() {
    const method = video.paused ? 'play' : "pause";
    video[method]();
}

function updateButton() {
    const icon = this.paused ? "►": "❚ ❚"
    toggle.textContent = icon;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration ) * 100
    progressBar.style.flexBasis = `${percent}%`
}

function skip() {
    console.log(this.dataset);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    console.log(this.name, this.value);
    video[this.name] = this.value
}

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)
toggle.addEventListener('click', togglePlay)
skipButton.forEach((button) => {
    button.addEventListener('click', skip)
})
ranges.forEach((range) => range.addEventListener('change', handleRangeUpdate))
ranges.forEach((range) => range.addEventListener('mousemove', handleRangeUpdate))

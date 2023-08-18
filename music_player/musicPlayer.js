let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');
let leftIcon = document.getElementById('left');
let listIcon = document.getElementById('list');
let rightIcon = document.getElementById('right');
let songTitle = document.getElementsByTagName('h1');
let songNumber = document.querySelector('p');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let music_player = document.querySelector('.music-player');

const hexNumbers = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];
let hex1 = '';
let hex2 = '';

let musicList = [
  'happy-day-background-vlog-music.mp3',
  'only-forward.mp3',
  'summer-dance-tropical-house-for-short-vlog-videos-background-music.mp3',
  'summer-nights-tropical-house-music.mp3',
  'summer-party.mp3',
  'summer-tropical-house-background-music-for-video-wonderful-molly.mp3',
];

console.log(songTitle[0].textContent);
const currentSongName = song.src.split('media/')[1];
let currentSongIndex = musicList.indexOf(currentSongName);

function nextTrack() {
  if (currentSongIndex < musicList.length - 1) {
    currentSongIndex += 1;
  } else currentSongIndex = 0;
  song.setAttribute('src', `media/${musicList[currentSongIndex]}`);
  songTitle[0].innerText = musicList[currentSongIndex].split('.')[0];
  song.load();
  song.play();
}

song.addEventListener('ended', nextTrack);

leftIcon.addEventListener('click', changeSong);
rightIcon.addEventListener('click', changeSong);

function resetValues() {
  curr_time.textContent = '00:00';
  total_duration.textContent = '00:00';
  progress.value = 0;
}

function changeSong(e) {
  e.preventDefault();
  const clickIcon = e.target.id;
  console.log(clickIcon);

  let songName;
  console.log(currentSongIndex);
  if (clickIcon === 'left') {
    currentSongIndex === 0
      ? (songName = musicList[musicList.length - 1])
      : (songName = musicList[currentSongIndex - 1]);
    console.log(musicList.indexOf(songName));
  } else if (clickIcon === 'right') {
    currentSongIndex === musicList.length - 1
      ? (songName = musicList[0])
      : (songName = musicList[currentSongIndex + 1]);
  }

  currentSongIndex = musicList.indexOf(songName);

  song.setAttribute('src', `media/${songName}`);
  songTitle[0].innerText = songName.split('.')[0];
  songNumber.textContent = `Track ${currentSongIndex + 1}`;

  console.log(songName);
  song.pause();
  song.load();
  song.play();
}
// getLastSong();

song.onloadedmetadata = function () {
  progress.max = song.onduration;
  progress.value = song.currentTime;
};

function generateRandomHex() {
  hex1 = '#';
  hex2 = '#';
  for (let i = 0; i < 6; i++) {
    hex1 += hexNumbers[Math.floor(Math.random() * hexNumbers.length)];
    hex2 += hexNumbers[Math.floor(Math.random() * hexNumbers.length)];
  }

  // console.log(hex1, hex2);
  music_player.style.background = `linear-gradient(45deg,${hex1},${hex2})`;
}

if (song.play()) {
  ctrlIcon.classList.remove('fa-play');
  ctrlIcon.classList.add('fa-pause');
  setInterval(() => {
    progress.value = song.currentTime;
    generateRandomHex();
    seekUpdate();
  }, 500);
}

function playPause() {
  if (ctrlIcon.classList.contains('fa-pause')) {
    song.pause();

    ctrlIcon.classList.remove('fa-pause');
    ctrlIcon.classList.add('fa-play');
  } else {
    song.play();
    ctrlIcon.classList.remove('fa-play');
    ctrlIcon.classList.add('fa-pause');
  }
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.remove('fa-play');
  ctrlIcon.classList.add('fa-pause');
};
ctrlIcon.addEventListener('click', playPause);

function seekTo() {
  let seekto = song.duration * (progress.value / 100);
  song.currentTime = seekto;
}
function seekUpdate() {
  let seekPosition = 0;
  if (!isNaN(song.duration)) {
    seekPosition = song.currentTime * (100 / song.duration);
    progress.value = seekPosition;

    let currentMinutes = Math.floor(song.currentTime / 60);
    let currentSeconds = Math.floor(song.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(song.duration / 60);
    let durationSeconds = Math.floor(song.duration - durationMinutes * 60);

    if (currentSeconds < 10) {
      currentSeconds = '0' + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = '0' + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = '0' + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = '0' + durationMinutes;
    }

    curr_time.textContent = currentMinutes + ':' + currentSeconds;
    total_duration.textContent = durationMinutes + ':' + durationSeconds;
  }
}

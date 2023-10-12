const songs =[
    {
        title: 'Attention',
        artist: 'Charlie Puth',
        url: 'Musics/music 0.mp3',
        thumbnail: 'https://images.unsplash.com/photo-1644789391123-34361e50593d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    },
    {
        title: 'Despacito',
        artist: 'Luis Fonsi',
        url: 'Musics/music 1.mp3',
        thumbnail: 'https://images.unsplash.com/photo-1517264097307-63b4210df978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    },
    {
        title: 'At My Worst',
        artist: 'Pink Sweat',
        url: 'Musics/music 2.mp3',
        thumbnail: 'https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    },
    {
        title: 'Perfect',
        artist: 'Ed Sheeran',
        url: 'Musics/music 3.mp3',
        thumbnail: 'https://images.unsplash.com/photo-1613253307267-70b78f8d98d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    },
    {
        title: 'Darari',
        artist: 'Treasure',
        url: 'Musics/music 4.mp3',
        thumbnail: 'https://plus.unsplash.com/premium_photo-1674595205685-0f6dec44acd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    },
    {
        title: 'Cupid',
        artist: 'Fifty Fifty',
        url: 'Musics/music 5.mp3',
        thumbnail: 'https://images.unsplash.com/photo-1599582759465-560421a586ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    },
    {
        title: 'Christmas Lights',
        artist: 'Zach Seabaugh',
        url: 'Musics/music 6.mp3',
        thumbnail: 'https://plus.unsplash.com/premium_photo-1673069234254-138daab16d50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    },
    {
        title: 'Better When Im Danching',
        artist: 'Meghan Trainor',
        url: 'Musics/music 7.mp3',
        thumbnail: 'https://plus.unsplash.com/premium_photo-1684958028861-0c86ce9d2409?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    },
    {
        title: 'Treat You Better',
        artist: 'Shawn Mendes',
        url: 'Musics/music 8.mp3',
        thumbnail: 'https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    },
    {
        title: 'Lover',
        artist: 'Taylor Swift',
        url: 'Musics/music 9.mp3',
        thumbnail: 'https://images.unsplash.com/photo-1591228755407-a0a9edad7c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    },
    {
        title: 'If I Cant Have You',
        artist: 'Shawn Mendes',
        url: 'Musics/music 10.mp3',
        thumbnail: 'https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    },
];


        
const titleEl = document.querySelector('#title');
const artistEl = document.querySelector('#artist');
const thumbnailEl = document.querySelector('#thumbnail');
const progressEl = document.querySelector('#progress');
const currentTimeEl = document.querySelector('#current-time');
const totalTimeEl = document.querySelector('#total-time');
const repeatBtn = document.querySelector('#repeat-btn');
const prevBtn = document.querySelector('#prev-btn');
const toggleBtn = document.querySelector('#toggle-btn'); 
const nextBtn = document.querySelector('#next-btn'); 
const shuffleBtn = document.querySelector('#shuffle-btn');
const playlistEl = document.querySelector('#playlist');


const songEls = [];

let activeSongIdx = undefined;

songs.forEach((song, idx) => {
    const songBtn = document.createElement('button');
    const songEl = document.createElement('audio');

    songEls.push(songEl);

    songBtn.className = 'py-2 flex justify-between w-full hover:font-bold';
    songEl.src = song.url;

    playlistEl.appendChild(songEl);


    songEl.addEventListener('loadedmetadata', () => {

        const { duration } = songEl;

        const time = getReadableTime(duration);

        song.time = time;

        songBtn.innerHTML = `${song.title} <span>${time}</span>`;

        playlistEl.appendChild(songBtn);

        if (idx === 0){
            songBtn.classList.add('font-bold');

            activeSongIdx = idx;
            setSongDetails(song);
        }
    });

    songEl.addEventListener('timeupdate', () => {
        const time = songEl.currentTime;
        updateProgress(time);
        currentTimeEl.innerText = getReadableTime(time);

    });

    songBtn.addEventListener('click', () => {

        document.querySelector('#playlist button.font-bold').classList.remove('font-bold');

        songBtn.classList.add('font-bold');
        stopPlayingSong();
        
        activeSongIdx = idx;
        setSongDetails(song);
    });

    const hiddenImgEl = document.createElement('img');
    hiddenImgEl.src = song.thumbnail;
    hiddenImgEl.classList.add('hidden');
    document.body.appendChild(hiddenImgEl);
});



toggleBtn.addEventListener('click', () => {
   
    if(songEls[activeSongIdx].paused) {
        toggleBtn.classList.add('play');
        songEls[activeSongIdx].play();
    }else {
        toggleBtn.classList.remove('play');
        songEls[activeSongIdx].pause();
    }
   
});

prevBtn.addEventListener('click', () => {

    activeSongIdx--;
    if(activeSongIdx < 0){
        activeSongIdx = 0;
    }
    setSongDetails(songs[activeSongIdx]);
});

nextBtn.addEventListener('click', () => {
    
    stopPlayingSong();

    activeSongIdx++;
    if(activeSongIdx > songs.length - 1){
        activeSongIdx = songs.length - 1;
    }
    setSongDetails(songs[activeSongIdx]);
});

function stopPlayingSong() {
    toggleBtn.classList.remove('play');
    songEls[activeSongIdx].pause();
}

function updateProgress(time) {
    progressEl.value = time / songEls[activeSongIdx].duration * 100;
}

function setSongDetails(song) {
    songEls[activeSongIdx].currentTime = 0;
    currentTimeEl.innerText = '0:00';
    totalTimeEl.innerText = song.time;
    thumbnailEl.src = song.thumbnail;
    titleEl.innerText = song.title;
    artistEl.innerText = song.artist;
}

function getReadableTime(duration){
    return `${Math.floor(duration / 60)}:${`${Math.floor(duration % 60)}`.padStart(2, '0')}`;
}


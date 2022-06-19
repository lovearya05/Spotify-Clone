console.log("Welcome to spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let masteSongName = document.getElementById('masteSongName')
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "salam-e-Ishiq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Bullet - salam-e-Ishiq", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Mulakt - salam-e-Ishiq", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Yaari - salam-e-Ishiq", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Haseena - Ishiq", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Akhiyaan", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Inch di Gal", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "3Peg - Sharry Maan", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Gararri", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Dildariyan", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
    // element.getElementsByClassName("songtime")[0].innerHTML = "jjjj";
    // var a = document.getElementById(
    //     "Test_Audio").duration;
    element.getElementsByClassName("songtime")[0].innerHTML = audioElement.duration;

})

// audioElement.play();

// Handel Play/pause Click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})


//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElement.src = `songs/${songIndex}.mp3`;
        masteSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>10){
        songIndex=0;
    }else{
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masteSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;

    
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex-=1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masteSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;

    
})
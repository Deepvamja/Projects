let progress = document.getElementById("progress");

let song = document.getElementById("song");

let ctrlicon = document.getElementById("ctrlicon");


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currenttime;
}

function playpause(){
    if(ctrlicon.classList.contains("fa-pause")){
        song.pause();
        ctrlicon.classList.remove("fa-pause");
        ctrlicon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlicon.classList.add("fa-pause");
        ctrlicon.classList.remove("fa-play");
    }

}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currenttime;

    },500);
}

progress.onchange = function(){
    song.play();
    song.currenttime = progress.value;
    ctrlicon.classList.add("fa-pause");
    ctrlicon.classList.remove("fa-play");

}



const play=document.getElementById('play122');
const music =document.getElementById('music1');
const mainimg=document.getElementById('imgplay');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
const title=document.getElementById('title'); 
const artist=document.getElementById('artist');
const vedeo= document.getElementById('vedeo1');
let volume_slider2=document.getElementById('volume_slider2');
let vl_sl=document.getElementById('volume_slider6');
let i=0;
let musicnumber=0;
var startplay=0;




 let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let curr_time2 = document.querySelector(".current-time");
let total_duration2 = document.querySelector(".total-duration");
var dark=0;

let curr_track=music;
/// seker 
const songs=[
    {
        name: "music1",
        title: "O.O.L",
        artist: "A.Walker",
    },

    {
        name: "music2",
        title: "PACHTAOGE",
        artist: "ARIJIT",
    },
    {
        name: "music3",
        title: "APSARA",
        artist: "ARIJIT",
    },
    {
        name: "music4",
        title: "Jatt te jawani",
        artist: "dilprit dhilon",
    },
    {
        name: "music5",
        title: "bismillah",
        artist: "amrit mann",
    },
    {
        name: "music6",
        title: "PASAND ",
        artist: "gurnaam bhular",
    },
    {
        name: "music7",
        title: "karda ",
        artist: "g-khan",
    },
    {
        name: "music8",
        title: "befikre",
        artist: "B-dayal",
    },
    {
        name: "music9",
        title: "jugrafiya",
        artist: "udit-narayan",
    },
    {
        name: "music10",
        title: "dhadak ",
        artist: "ajay gogavale",
    },
    {
        name: "music11",
        title: "cutiepie",
        artist: "pritam",
    },
    {
        name: "music12",
        title: "chitthi",
        artist: "jubin-nautiyal",
    },
    {
        name: "music13",
        title: "Bad Guy",
        artist: "Billie Eilish",
    },
    {
        name: "music14",
        title: "On my way",
        artist: "Alan walker",
    },
    {
        name: "music15",
        title: "Faded",
        artist: "Alan walker",
    },
    {
        name: "music16",
        title: "Alone",
        artist: "Alan walker",
    },
    {
        name: "music17",
        title: "O.O.L",
        artist: "Alan Walker",
    },
]
let lastindex= 16;
function seekUpdate() {
    let seekPosition = 0;
    
    // Check if the current track duration is a legible number
    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;
    
        // Calculate the time left and the total duration
        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
    
        // Add a zero to the single digit time values
        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
    
        // Display the updated duration
        curr_time.style.innerHtml = currentMinutes + ":" + currentSeconds;
        curr_time2.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
        total_duration2.textContent = durationMinutes + ":" + durationSeconds;
    }
    }
    var isplay=0;
function playitmain()
{
if(i==0)
{
   
    if(dark==0 ||startplay==1)
    {
        startplay=1;
     isplay=1;
    music.play();
    }
    else if(startplay==0 && dark==1){
        
       
          vedeo.play();
         
        setTimeout(() => {
            vedeo.pause();
            music.play();
            startplay=1;
            isplay=1;
        }, 15000);
        setTimeout(() => {
            $('.music_container').css('display','block');
            $('.animation-radio').css('display','none');
            
        }, 15000);
        dark=1;

    }
    updateTimer = setInterval(seekUpdate, 1000);
    play.classList.replace("fa-play","fa-pause");
    mainimg.classList.add("anime");
    i++;
}
else{
    music.pause(); 
    isplay=1;
    play.classList.replace("fa-pause","fa-play");
    mainimg.classList.remove("anime");
    i=0;
}
}
function loadsong(songs){
  
    
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src="music/"+songs.name+".mp3";
    mainimg.src="images/"+songs.name+".jpg";
    play.classList.replace("fa-play","fa-pause");
    mainimg.classList.add("anime");
    updateTimer = setInterval(seekUpdate, 1000);
    i++;
}

function playnext()
{

    if(musicnumber>=lastindex)
    {
        musicnumber=0;
        loadsong(songs[musicnumber]);
        music.play();
    }
    else{

    musicnumber++;
   
    loadsong(songs[musicnumber]);
    music.play();
 
    }
    
}
 
function playprev()
{
    if(musicnumber==0)
    {
        musicnumber=lastindex;
        loadsong(songs[musicnumber]);
        music.play();
    }
    else
    {
    musicnumber--;
    loadsong(songs[musicnumber]);
    music.play();
    }

}
function trending()
{
    document

}
function play1(a,b,c,d){
  
    
    const mainimg=document.getElementById('imgplay');
    mainimg.src=a;
    music.src=b;
    title.textContent=c;
    artist.textContent=d;
    i=0;
    playitmain();
    
    }
    function play2(a)
    {
        loadsong(songs[a]);
        musicnumber=a;
        i=0;
        playitmain();

    }


   
function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
    }

    function seekTo() {
        // Calculate the seek position by the
        // percentage of the seek slider
        // and get the relative duration to the track
        volume_slider2.value=seek_slider.value ;
        seekto = curr_track.duration * (seek_slider.value / 100);
        
        // Set the current track position to the calculated seek position
        curr_track.currentTime = seekto;
        }
        function seekTo2() {
            // Calculate the seek position by the
            // percentage of the seek slider
            // and get the relative duration to the track
            seek_slider.value=volume_slider2.value ;
            seekto = curr_track.duration * (volume_slider2.value / 100);
            
            // Set the current track position to the calculated seek position
            curr_track.currentTime = seekto;
            }
        
        function setVolume() {
        // Set the volume according to the
        // percentage of the volume slider set
        curr_track.volume = volume_slider.value / 100;
        vl_sl.value=volume_slider.value;
        }
        function setVolume2() {
            // Set the volume according to the
            // percentage of the volume slider set
            curr_track.volume = vl_sl.value / 100;
           volume_slider.value= vl_sl.value;
            }
        
        
        function seekUpdate() {
        let seekPosition = 0;
        
        // Check if the current track duration is a legible number
        if (!isNaN(curr_track.duration)) {

            seekPosition = curr_track.currentTime * (100 / curr_track.duration);
            seek_slider.value = seekPosition;
            volume_slider2.value=seekPosition;
        
            // Calculate the time left and the total duration
            let currentMinutes = Math.floor(curr_track.currentTime / 60);
            let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
            let durationMinutes = Math.floor(curr_track.duration / 60);
            let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
        
            // Add a zero to the single digit time values
            if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
            if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
            if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
            if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
        
            // Display the updated duration
            curr_time.textContent = currentMinutes + ":" + currentSeconds;
            total_duration.textContent = durationMinutes + ":" + durationSeconds;
        }
        }

        // onscroll krne k liye neeche vaale ko 
        var z=0;
        window.onscroll = function() { 
            var a= scrollY;
            console.log(a);
    
            if(a>300)
            {
                if(z==0)
                {

                    document.getElementById('offbytn').click();
                    z++;
                    
                }
              
            }
            if(a<300)
            {
                if(z==1)
                {

                    document.getElementById('cffbytn').click();
                    z--;
                    
                }

            }
          
    
    
           
        }
        // night mode function 
var modesacn=0;
        function nightmode(){

             if(modesacn==0)
             { $('.music_container').css('display','none');
                $('.animation-radio').css('display','block');
                dark=1;
                 modesacn++;

                 $('.nightdaymode').css('justifyContent','end');
                 $('.nightdaymode').css('background','black');
             

                }
                else{
                    dark=0;
                    modesacn--;
                    $('.music_container').css('display','block');
                    $('.animation-radio').css('display','none');
                   

                 $('.nightdaymode').css('justifyContent','start');
                 $('.nightdaymode').css('background','grey');
                }
                var theme = document.getElementsByTagName('link')[4];
  
            if (theme.getAttribute('href') == 'light.css') {
                theme.setAttribute('href', 'dark.css');
            } else {
                theme.setAttribute('href', 'light.css');
            }
            if(isplay==1)
            { $('.animation-radio').css('display','none');
                $('.music_container').css('display','block');
            }
         
           
        }
var mdc=0
function modebtn(){
    if(mdc==0)
    {
    document.getElementById('modebtn').innerHTML="&#9728;";
    document.getElementById('modebtn').style.backgroundColor="Black";
    document.getElementById('modebtn').style.color="white";
    mdc=1;
    }
    else{
        document.getElementById('modebtn').innerHTML="&#9790;";
        document.getElementById('modebtn').style.backgroundColor="white";
        document.getElementById('modebtn').style.color="Black";
        mdc=0

    }
    nightmode()




}        
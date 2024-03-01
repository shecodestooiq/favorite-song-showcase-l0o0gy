function displaySongInfo() {
        
    const songName = document.getElementById("songName").value;
    const youtubeLink = document.getElementById("youtubeLink").value;
    const description = document.getElementById("description").value;
    const year = document.getElementById("year").value;
    

// the display-area
songName = document.getElementById("songName").innerHTML=favsong;
description = document.getElementById("description").innerHTML=songDescription;
year = document.getElementById("year").innerHTML=year;    
innerHTML<iframe src="https://www.youtube.com//embed/"+(youtubeLink = document.getElementById("youtubeLink").innerHTML=link)></iframe>

}
module.exports = {
    displaySongInfo: displaySongInfo,
 };
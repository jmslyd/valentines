function toggleMusic() {
    var audio = document.getElementById("music");
    var musicStatus = document.getElementById("music-status");
  
    if (audio.paused) {
      audio.play();
      musicStatus.innerHTML = "🔊"; // Show speaker symbol when music is playing
    } else {
      audio.pause();
      audio.currentTime = 0; // Reset the audio to start from the beginning
      musicStatus.innerHTML = "🔇"; // Show mute symbol when music is paused
    }
  }
  
  // Add click event listener to the music control disc
  document.getElementById("music-control").addEventListener("click", toggleMusic);
  
// Function to play the audio when the button is clicked
function playButtonSong() {
    var buttonSong = document.getElementById("buttonSong");
    buttonSong.play();
}

// Function to play specific song based on the image clicked
function playSong(song1,song4,song6,song7) {
    // Pause all the songs first
    for (let i = 1; i <= 10; i++) {
        var audio = document.getElementById("song" + i);
        if (audio) {
            audio.pause();
            audio.currentTime = 0; // Reset the audio to start
        }
    }

    // Play the selected song
    var selectedSong = document.getElementById("song" + song4.mpeg);
    if (selectedSong) {
        selectedSong.play();
    }
}

// Optional: Function to trigger confetti animation
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Update the dynamic name throughout the page
function updateDynamicName(Hubby,Janu,Baccha,Ladoo,Parannath,Pariparmeshwar,Handsome,PrinceCharming) {
    document.getElementById("dynamic-name").textContent = Love;
    document.getElementById("dynamic-name-2").textContent = Hubby;
}

// Automatically trigger confetti on page load
window.onload = function() {
    triggerConfetti();
};
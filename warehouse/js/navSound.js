const navItems = document.querySelectorAll('.nav li');

// 3. Get the audio element from the HTML
const hoverSound = document.getElementById('hover-sound');

// 4. Loop through each navigation item
navItems.forEach(item => {
    // Add an event listener for when the mouse enters the element's area
    item.addEventListener('mouseenter', () => {
        // Rewind the sound to the beginning (in case it's already playing)
        hoverSound.currentTime = 0;
        // Play the sound
        hoverSound.volume = 0.1;
        hoverSound.play();
    });
});
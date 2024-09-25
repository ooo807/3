// script.js  
document.addEventListener('DOMContentLoaded', function() {  
    const playBtn = document.getElementById('playBtn');  
    const pauseBtn = document.getElementById('pauseBtn');  
    const animatedBox = document.getElementById('animatedBox');  
  
    playBtn.addEventListener('click', function() {  
        animatedBox.style.animationPlayState = 'running';  
        playBtn.disabled = true;  
        pauseBtn.disabled = false;  
    });  
  
    pauseBtn.addEventListener('click', function() {  
        animatedBox.style.animationPlayState = 'paused';  
        playBtn.disabled = false;  
        pauseBtn.disabled = true;  
    });  
});
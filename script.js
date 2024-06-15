document.getElementById('play-audio').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
        this.textContent = 'Hentikan Audio';
    } else {
        audio.pause();
        this.textContent = 'Putar Audio';
    }
});

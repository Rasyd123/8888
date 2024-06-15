document.getElementById('toggle-audio').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
        this.textContent = 'Hentikan Audio';
    } else {
        audio.pause();
        this.textContent = 'Putar Audio';
    }
});

// Autoplay audio on page load
window.addEventListener('load', function() {
    var audio = document.getElementById('audio');
    audio.play().catch(function(error)
    });
});

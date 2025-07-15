

function showImage() {
    document.getElementById('showImageBtn').style.display = 'none';
    document.getElementById('myImage').style.display = 'block';
    document.getElementById('music').play();
}

function showRandomFact() {
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
        .then(res => res.json())
        .then(data => {
            document.getElementById("fact_text").textContent = data.text;
            document.getElementById('music').play();
            document.getElementById('showImageBtn').style.display = 'none';
            document.getElementById('myImage').style.display = 'none';
            document.getElementById('fact_text').style.display = 'block';
        });
    
}




document.addEventListener("visibilitychange", () => {
    const audio = document.getElementById("music");
    if (document.hidden) {
        audio.pause();
    } else {
        audio.currentTime = 0;
        audio.play();
    }
});
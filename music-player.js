// Beach
var beachButton = document.querySelector('#playBeach');
var beachSound = document.querySelector('#beachSound');

beachButton.addEventListener('click', function () {
    if (beachSound.paused) {
        beachSound.play();
        beachButton.innerHTML = 'Pause';
    } else {
        beachSound.pause();
        beachButton.innerHTML = 'Beach';
    }
})

//Rain
var rainButton = document.querySelector('#playRain');
var rainSound = document.querySelector('#rainSound');

rainButton.addEventListener('click', function () {
    if (rainSound.paused) {
        rainSound.play();
        rainButton.innerHTML = 'Pause';
    } else {
        rainSound.pause();
        rainButton.innerHTML = 'Rain';
    }
})

//LoFi
var lofiButton = document.querySelector('#playLofi');
var lofiSound = document.querySelector('#LofiSound');

lofiButton.addEventListener('click', function () {
    if (lofiSound.paused) {
        lofiSound.play();
        lofiButton.innerHTML = 'Pause';
    } else {
        lofiSound.pause();
        lofiButton.innerHTML = 'LoFi';
    }
})

//Meditation

var meditationButton = document.querySelector('#playMeditation');
var meditationSound = document.querySelector('#meditationSound');

meditationButton.addEventListener('click', function () {
    if (meditationSound.paused) {
        meditationSound.play();
        meditationButton.innerHTML = 'Pause';
    } else {
        meditationSound.pause();
        meditationButton.innerHTML = 'Meditation';
    }
})

//Piano

var pianoButton = document.querySelector('#playPiano');
var pianoSound = document.querySelector('#pianoSound');

pianoButton.addEventListener('click', function () {
    if (pianoSound.paused) {
        pianoSound.play();
        pianoButton.innerHTML = 'Pause';
    } else {
        pianoSound.pause();
        pianoButton.innerHTML = 'Piano';
    }
})
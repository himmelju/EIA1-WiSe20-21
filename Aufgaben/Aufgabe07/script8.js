//Variablen drumPads zu String bei Sounds 
var drumPads = [];
drumPads[0] = new Audio('./assets/A.mp3');
drumPads[1] = new Audio('./assets/C.mp3');
drumPads[2] = new Audio('./assets/F.mp3');
drumPads[3] = new Audio('./assets/G.mp3');
drumPads[4] = new Audio('./assets/hihat.mp3');
drumPads[5] = new Audio('./assets/kick.mp3');
drumPads[6] = new Audio('./assets/laugh-1.mp3');
drumPads[7] = new Audio('./assets/laugh-2.mp3');
drumPads[8] = new Audio('./assets/snare.mp3');
//QuerySelecor Klick, Play function
document.querySelector(".pad1").addEventListener("click", function () {
    playSample(0);
});
document.querySelector(".pad2").addEventListener("click", function () {
    playSample(1);
});
document.querySelector(".pad3").addEventListener("click", function () {
    playSample(2);
});
document.querySelector(".pad4").addEventListener("click", function () {
    playSample(3);
});
document.querySelector(".pad5").addEventListener("click", function () {
    playSample(4);
});
document.querySelector(".pad6").addEventListener("click", function () {
    playSample(5);
});
document.querySelector(".pad7").addEventListener("click", function () {
    playSample(6);
});
document.querySelector(".pad8").addEventListener("click", function () {
    playSample(7);
});
document.querySelector(".pad9").addEventListener("click", function () {
    playSample(8);
});
//Funktion der drumPads
function playSample(i) {
    drumPads[i].play();
}
;
//QuerySelector Play Button play und click function
document.querySelector(".playButton").addEventListener("click", function () {
    setInterval(function () {
        playButton();
    }, 500);
});
//Funktion des PlayButton
function playButton() {
    drumPads[5].play();
    drumPads[5].play();
    drumPads[8].play();
    drumPads[5].play();
    drumPads[5].play();
    drumPads[4].play();
}
//# sourceMappingURL=script8.js.map
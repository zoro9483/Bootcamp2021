var catEl = document.getElementById("cat");

var startTime = new Date().getTime();
var walkTheCat = function () {
    var currTime = new Date().getTime();
    var secondsElapsed = ((currTime - startTime) / 1000);
};
walkTheCat();

const element = document.getElementById('cat');
let start, previousTimeStamp;

function step(timestamp) {
    if (start === undefined)
        start = timestamp;
    const elapsed = timestamp - start;

    if (previousTimeStamp !== timestamp) {
        // Math.min() is used here to make sure the element stops at exactly 200px
        const count = Math.min(0.1 * elapsed, 600);
        element.style.transform = 'translateX(' + count + 'px)';
    }

    if (elapsed < 6000) { // Stop the animation after 2 seconds
        previousTimeStamp = timestamp
        window.requestAnimationFrame(step);
    }
}

window.requestAnimationFrame(step);
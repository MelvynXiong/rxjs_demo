let startTime;
let endTime;
const button = document.getElementById('hold-me');
const result = document.getElementById('hold-time');
button.onmousedown = function() {
    startTime = new Date();
}
button.onmouseup = function() {
    endTime = new Date();
    const gap = endTime - startTime;
    result.innerHTML = gap + '';
}
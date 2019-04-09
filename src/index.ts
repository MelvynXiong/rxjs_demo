import Rx from 'rxjs/Rx';

const button = document.getElementById('hold-me');
const result = document.getElementById('hold-time');

const mouseDown = Rx.Observable.fromEvent(button, 'mousedown');
const mouseUp = Rx.Observable.fromEvent(button, 'mouseup');
const holdTime = mouseUp.timeStamp().withLatestFrom(mouseDown.timeStamp(), (mouseUpEvent, mouseDownEvent) => {
    return mouseUpEvent.timeStamp - mouseDownEvent.timeStamp;
});

holdTime.subscribe(ms => {
    result.innerText = ms;
})
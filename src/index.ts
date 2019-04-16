import { Observable } from 'rxjs'

const observable = new Observable(subscriber => {
  console.log('hello')
  subscriber.next(42)
  subscriber.next(1)
  subscriber.next(2)
  setTimeout(() => {
    subscriber.next(300); // happens asynchronously
  }, 1000);
})
console.log('start')
observable.subscribe(x => console.log(x))
observable.subscribe(x => console.log(x))
console.log('end')

// const result = document.getElementById('hold-time')

// const mouseDown = fromEvent(button, 'mousedown')
// const mouseUp = fromEvent(button, 'mouseup')
// const holdTime = mouseUp
//   .timeStamp()
//   .withLatestFrom(mouseDown.timeStamp(), (mouseUpEvent, mouseDownEvent) => {
//     return mouseUpEvent.timeStamp - mouseDownEvent.timeStamp
//   })

// holdTime.subscribe(ms => {
//   result.innerText = ms
// })

import { Observable } from 'rxjs'

const observable = new Observable(subscriber => {
  subscriber.next(1)
  subscriber.next(2)
  subscriber.complete()
  setTimeout(() => {
    subscriber.next('hi'); // happens asynchronously
  }, 1000);
})
console.log('start')
const subscription = observable.subscribe(x => console.log(x))
subscription.unsubscribe()
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

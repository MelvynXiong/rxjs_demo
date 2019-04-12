import { Observable } from 'rxjs'

const observable = new Observable(subscriber => {
  subscriber.next(1)
  subscriber.next(2)
  subscriber.next(3)
  setTimeout(() => {
    subscriber.next(5)
    subscriber.complete()
  }, 2000)
})

console.log('just before subscribe')
observable.subscribe({
  next(x) {
    console.log('got value ' + x)
  },
  error(err) {
    console.log('something wrong ' + err)
  },
  complete() {
    console.log('done')
  },
})
console.log('just after subscribe')
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

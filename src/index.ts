import { fromEvent } from 'rxjs'
import { throttleTime, scan } from 'rxjs/operators'

const button = document.getElementById('hold-me')
fromEvent(button, 'click').pipe(
  throttleTime(1000),
  scan(count => count + 1, 0) as any
)
.subscribe(count => console.log(`Clicked ${count} times`))
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

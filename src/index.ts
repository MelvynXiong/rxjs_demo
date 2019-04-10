// import { fromEvent } from 'rxjs'
// import { scan } from 'rxjs/operators'

const button = document.getElementById('hold-me')
let count = 0
let rate = 1000
let lastClick = Date.now() - rate
button.addEventListener('click', () => {
  if (Date.now() - lastClick >= rate) {
    console.log(`Clicked ${++count} times`)
    lastClick = Date.now()
  }
})
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

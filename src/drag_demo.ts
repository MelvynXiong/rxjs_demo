import { fromEvent } from 'rxjs'
import { concatAll, map, takeUntil } from 'rxjs/operators'

const target = document.getElementById('rank')
const body = document.body

const mouseDown = fromEvent(target, 'mousedown')
const mouseMove = fromEvent(body, 'mousemove')
const mouseUp = fromEvent(body, 'mouseup')

// 当mouseDown时，转成mouseMove事件
const source = mouseDown.pipe(
  map(event => mouseMove.pipe(takeUntil(mouseUp))),
  concatAll(),
  map((event:MouseEvent) => ({
    x: event.clientX,
    y: event.clientY
  }))
)
source.subscribe(pos => {
  target.style.left = pos.x + 'px'
  target.style.top = pos.y + 'px'
})

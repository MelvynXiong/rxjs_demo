import { fromEvent } from 'rxjs'
import {
  concatAll,
  filter,
  map,
  takeUntil,
  withLatestFrom,
} from 'rxjs/operators'

// 处理滚动后样式的改变
const video = document.getElementById('video')
const anchor = document.getElementById('anchor')
const scroll = fromEvent(document, 'scroll').pipe(
  map(e => anchor.getBoundingClientRect().bottom < 0)
)

scroll.subscribe(bool =>
  bool
    ? video.classList.add('video-fixed')
    : video.classList.remove('video-fixed')
)

// 处理视频变小后的拖动
const validValue = (value, max, min) => Math.max(Math.min(value, max), min)
const mouseDown = fromEvent(video, 'mousedown')
const mouseUp = fromEvent(document, 'mouseup')
const mouseMove = fromEvent(document, 'mousemove')

const source = mouseDown.pipe(
  filter(e => video.classList.contains('video-fixed')),
  map(e => mouseMove.pipe(takeUntil(mouseUp))),
  concatAll(),
  withLatestFrom(mouseDown, (move: MouseEvent, down: MouseEvent) => ({
    x: validValue(move.clientX - down.offsetX, window.innerWidth - 320, 0),
    y: validValue(move.clientY - down.offsetY, window.innerHeight - 180, 0),
  }))
)
source.subscribe(pos => {
  video.style.left = pos.x + 'px'
  video.style.top = pos.y + 'px'
})

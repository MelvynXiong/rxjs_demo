import { fromEvent } from 'rxjs'
import { delay, map } from 'rxjs/operators'

const imgList = document.querySelectorAll('img')

const movePos = fromEvent(document, 'mousemove').pipe(
  map((e: MouseEvent) => ({
    x: e.clientX,
    y: e.clientY,
  }))
)
function followMouse(DOMArr) {
  const delayTime = 600
  DOMArr.forEach((item, index) => {
    const temp = movePos.pipe(
      delay((delayTime * (Math.pow(0.65, index) + Math.cos(index / 4))) / 2)
    )
    temp.subscribe(
      pos =>
        (item.style.transform =
          'translate3d(' + pos.x + 'px, ' + pos.y + 'px, 0)')
    )
  })
}
followMouse(imgList)

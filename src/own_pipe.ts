import { interval } from 'rxjs'
import { filter, map } from 'rxjs/operators'

const ownPipe = (source, [...operators]) => {
  let initOb = source
  let index = 0
  while (index < operators.length) {
    initOb = operators[index](initOb)
    index++
  }
  return initOb
}
ownPipe(interval(1000), [filter(x => x !== 1), map((x:number) => x + 1)]).subscribe(
  console.log
)

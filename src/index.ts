import { interval, Subject } from 'rxjs'

const subject = new Subject<number>()

subject.subscribe({
  next: v => console.log(`observerA: ${v}`),
})
setTimeout(
  () =>
    subject.subscribe({
      next: v => console.log(`observerB: ${v}`),
    }),
  4000
)
const observable = interval(1000)
observable.subscribe(subject)

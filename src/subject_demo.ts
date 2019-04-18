import { interval } from 'rxjs'
import { take } from 'rxjs/operators'
const numbers = interval(1000)
const takeFourNumbers = numbers.pipe(take(4))
const observerA = {
  next: value => console.log('A next: ' + value),
  error: error => console.log('A error: ' + error),
  complete: () => console.log('A complete!'),
}

const observerB = {
  next: value => console.log('B next: ' + value),
  error: error => console.log('B error: ' + error),
  complete: () => console.log('B complete!'),
}

const subject = {
  observers: [],
  addObserver(observer) {
    this.observers.push(observer)
  },
  next(value) {
    this.observers.forEach(o => o.next(value))
  },
  error(error) {
    this.observers.forEach(o => o.error(error))
  },
  complete() {
    this.observers.forEach(o => o.complete())
  },
}
subject.addObserver(observerA)
takeFourNumbers.subscribe(subject)
setTimeout(() => {
  subject.addObserver(observerB)
}, 1000)

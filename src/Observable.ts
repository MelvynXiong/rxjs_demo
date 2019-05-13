import { Observer } from './index'

class Observable {
  private operation = null
  constructor(fn) {
    if (fn) {
      this.operation = fn
    }
  }
  public subscribe(observer) {
    const realObserver = new Observer(observer)
    this.operation(realObserver)
    return realObserver
  }
}

const observable = new Observable(function(observer) {
  observer.next(1)
  observer.next(2)
  observer.next(3)
  observer.complete()
  observer.next('not work')
})

const observer = {
  next(value) {
    console.log(value)
  },
  complete() {
    console.log('complete!')
  },
}

observable.subscribe(observer)

class Observer {
  private raw = null
  private continueEmitValue = true

  constructor(rawObserver) {
    this.raw = rawObserver
    this.continueEmitValue = true
  }
  public next(val) {
    if (this.continueEmitValue) {
      this.raw.next(val)
    }
  }
  public error(err) {
    if (this.continueEmitValue) {
      this.raw.error(err)
      this.unsubscribe()
    }
  }
  public complete() {
    if (this.continueEmitValue) {
      this.raw.complete()
      this.unsubscribe()
    }
  }
  public unsubscribe() {
    this.continueEmitValue = false
  }
}
function create(fn) {
  return {
    subscribe(observer) {
      const realObserver = new Observer(observer)
      fn(realObserver)
      return realObserver
    },
  }
}
const observable = create(subscriber => {
  subscriber.next(1)
  subscriber.next(2)
  subscriber.next(3)
  setTimeout(()=> {
    subscriber.next(4)
  }, 4000)
})

const subscriber_01 = {
  next: val => console.log(val),
  error: () => console.log('error'),
  complete: () => console.log('complete'),
}

const subscription = observable.subscribe(subscriber_01)
subscription.unsubscribe()
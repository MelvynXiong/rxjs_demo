function create(fn) {
  return {
    subscribe(observer) {
      fn(observer)
    },
  }
}
const observable = create(subscriber => {
  subscriber.next(1)
  subscriber.next(2)
  subscriber.next(3)
  subscriber.complete()
  subscriber.next(4)
})

const subscriber_01 = {
  next: val => console.log(val),
  error: () => console.log('error'),
  complete: () => console.log('complete'),
}

observable.subscribe(subscriber_01)

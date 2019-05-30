class MyPromise {
  public sCallbacks = []
  public eCallbacks = []
  public status = 'pending'
  public data = ''
  public reason = ''
  constructor(fn) {
    fn(this.resolve, this.reject)
  }

  public then(fulfilled?, rejected?) {
    if (this.status === 'pending') {
      this.sCallbacks.push(fulfilled)
      this.eCallbacks.push(rejected)
    } else if (this.status === 'fulfilled') {
      fulfilled(this.data)
    } else {
      rejected(this.reason)
    }

    return this
  }

  public resolve = val => {
    this.status = 'fulfilled'
    this.data = val
    setTimeout(() => {
      this.sCallbacks.forEach(fn => fn(val))
    }, 0)
  }

  public reject = val => {
    this.status = 'rejected'
    this.reason = val
    setTimeout(() => {
      this.eCallbacks.forEach(fn => fn(val))
    }, 0)
  }
}

function fn(num) {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(num)
    }, 1000)
  })
}

fn(1).then(data => {
  console.log(data)
})

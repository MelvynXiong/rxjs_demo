import { Observable, of } from 'rxjs'

const people = of('jerry', 'tom')
function map(source, callback) {
  return new Observable(observer => {
    observer.next('dfas')
    return source.subscribe(val => observer.next(callback(val)))
  })
}
const helloPeople = map(people, item => item + ' Hello~')

helloPeople.subscribe(console.log)

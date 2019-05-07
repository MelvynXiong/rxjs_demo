import { fromEvent } from 'rxjs'
import { debounceTime, filter, map, switchMap } from 'rxjs/operators'

const url =
  'https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&limit=5&origin=*'

const getSuggestList = (keyword: string) =>
  fetch(`${url}&search=${keyword}`, { method: 'GET', mode: 'cors' }).then(res =>
    res.json()
  )
const searchInput = document.getElementById('search') as any
const suggestList = document.getElementById('suggest-list')

const inputWord = fromEvent(searchInput, 'input')
const selectItem = fromEvent(suggestList, 'click')
const render = (suggestArr = []) => {
  suggestList.innerHTML = suggestArr
    .map(item => '<li>' + item + '</li>')
    .join('')
}
inputWord
  .pipe(
    debounceTime(1000),
    switchMap((e: any) => getSuggestList(e.target.value), (e, res) => res[1])
  )
  .subscribe(render)
selectItem
  .pipe(
    filter((e: any) => e.target.matches('li')),
    map(e => e.target.innerHTML)
  )
  .subscribe(text => {
    searchInput.value = text
    render()
  })

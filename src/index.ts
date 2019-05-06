import { fromEvent } from 'rxjs'
import { switchMap } from 'rxjs/operators'

const url =
  'https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&limit=5&origin=*'

const getSuggestList = (keyword: string) =>
  fetch(`${url}&search=${keyword}`, { method: 'GET', mode: 'cors' }).then(res =>
    res.json()
  )
const searchInput = document.getElementById('search')
// const suggestList = document.getElementById('suggest-list')

const inputWord = fromEvent(searchInput, 'change')
// const selectItem = fromEvent(suggestList, 'click')

inputWord
  .pipe(switchMap((e: any) => getSuggestList(e.target.value)))
  .subscribe(console.log)

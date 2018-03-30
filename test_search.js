const Rx = require('rxjs')

//<input id="text"/>

let text = document.getElementById('#text'),
  timer = null,
  currentSearch = '';

text.addEventListener('keyup', e => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    currentSearch = 'book';
    var searText = e.target.value;
    $.ajax({
      url: `search.qq.com/${searText}`,
      success: data => {
        if(data.search === currentSearch) {
          render(data)
        } else {
          //
        }
      }
    })
  }, 250);
})

// Rx 实现

let text = document.querySelector('#text');
let inputSteam = Rx.Observable.fromEvent(text, 'keyup')
  .debounceTime(250)
  .pluck('target', 'value')
  .switchMap(null => Http.get(url))
  .subscribe(data => render(data));
var Rx = require('rxjs');

var observable = Rx.Observable.create(observer => {
  observer.next('hi')
  observer.next('world')
  setTimeout(() => {
    observer.next('这是一段异步操作')
  }, 30);
})
console.log('start')
var subscription = observable.subscribe(value => {
  console.log('value', value)
})
console.log('end')
setTimeout(() => {
  subscription.unsubscribe()
}, 5000);

Rx.Observable.of(2)
                  .map(v=>v*2)
                  .subscribe(v=>console.log(`output:${v}`));
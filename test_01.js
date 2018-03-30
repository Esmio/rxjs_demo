var Rx = require('rxjs');

var source = Rx.Observable.create((observer => {
  try {
    observer.next(1)
    observer.next(2)
    observer.next(3)
    setTimeout(() => {
      observer.next('RxJs 30 days!');
    }, 2000);
  }catch(e){
    observer.error(e)
  }
}))

var observer = {
  next: val => console.log(val + 1),
  error: () => console.log('error'),
  complete: () => console.log('完成')
}

var subscribe = source.subscribe(observer)

var timer = setTimeout(() => {
  subscribe.unsubscribe();
  console.log('取消订阅')
}, 2000);
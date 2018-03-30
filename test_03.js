var Rx = require('rxjs');

var source = Rx.Observable.interval(1000).take(3);

var observableA = {
  next: value => console.log(`A next: ${value}`),
  error: error => console.log(`A error: ${error}`),
  complete: () => console.log(`A complete!`)
}

var observableB = {
  next: value => console.log(`B next: ${value}`),
  error: error => console.log(`B error: ${error}`),
  complete: () => console.log(`B complete!`)
}

var subject = new Rx.Subject()


source.subscribe(subject)
subject.subscribe(observableA)
// subject.subscribe(observableB)

setTimeout(() => {
  subject.subscribe(observableB)
}, 1000);
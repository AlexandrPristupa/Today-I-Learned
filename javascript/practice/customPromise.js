class Promise {
  constructor(cb) {
    console.log('Promise');
  }

  then() {
    console.log('then');
  }

  catch() {
    console.log('catch');
  }
}

const promise = new Promise(function(resolve, reject) {
  
});

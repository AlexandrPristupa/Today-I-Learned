class Promise {
  constructor(resolve, reject) {
    console.log('Promise');
  }

  then() {
    console.log('then');
  }

  catch() {
    console.log('catch');
  }
}

const promise = new Promise();

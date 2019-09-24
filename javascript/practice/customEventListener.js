class Event {
  constructor() {}

  addEventListener(type, callback) {
    const event = {
      type
    };

    console.log(type);
  }
}


const event = new Event();

event.addEventListener('click', event => { console.log(event) });
event.addEventListener('onchange', event => { console.log(event) });

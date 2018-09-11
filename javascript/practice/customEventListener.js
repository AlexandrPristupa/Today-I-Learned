class Event {
  constructor() {
    this.stack = [];
  }

  addEventListener(eventType, cb) {

    const event = {
      type: eventType
    };

    this.stack.push({
      eventType,
      cb
    });

    cb(event);

    console.log(this.stack);
  }

  removeEventListener(eventType, cb) {
    this.stack = this.stack.filter((event) => event.eventType !== eventType);
  }

}

const events = new Event();

const click = (e) => { console.log(e) };
const onChange = (e) => { console.log(e) };

events.addEventListener('click', click);
events.addEventListener('click', click);
events.addEventListener('click', click);
events.addEventListener('click', click);
events.addEventListener('onChange', onChange);

events.removeEventListener('click');

events.addEventListener('click', click);

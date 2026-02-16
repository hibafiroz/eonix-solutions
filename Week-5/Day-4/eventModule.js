//The events module allow us to create and handle custom events
//it provides the EventEmitter class which we can use to register event listeners with .on() and trigger them using .emit()
	

Methods-

on(event, listener)	//Register a listener for an event
emit(event, [args])	//Trigger the event
once(event, listener)	//Listen only once
off(event, listener) or removeListener()  //Remove a listener

const EventEmitter = require('events');
const emitter = new EventEmitter();


// 1. Listen for event

emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});


// 2. Emit the event

// emitter.emit('greet', 'Hiba');
// output: Hello, Hiba!

// we could use events to:
// 	Notify when a file upload finishes


emitter.on('uploadComplete', (filename) => {
  console.log(`Upload completed: ${filename}`);
});
emitter.emit('uploadComplete', 'image.png');

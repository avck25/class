const events = require('events'),
    eventEmitter = new events.EventEmitter();

//eventEmitter.setMaxListeners(11);

eventEmitter.on('tenOClock', () => {
    console.log("Its ten o'clock");
});

eventEmitter.on('tenOClock', () => {
    console.log("Time for bed!");
});

eventEmitter.on('tenOClock', () => {
    console.log("Time for bed!");
});

eventEmitter.on('tenOClock', () => {
    console.log("Time for bed!");
});

eventEmitter.on('tenOClock', () => {
    console.log("Time for bed!");
});

eventEmitter.on('tenOClock', () => {
    console.log("Time for bed!");
});

eventEmitter.on('tenOClock', () => {
    console.log("Time for bed!");
});

eventEmitter.on('tenOClock', () => {
    console.log("Time for bed!");
});

eventEmitter.on('tenOClock', () => {
    console.log("Time for bed!");
});

eventEmitter.on('tenOClock', () => {
    console.log("Time for bed!");
});

eventEmitter.on('tenOClock', () => {
    console.log("Time for bed!");
});

function readFile() {
    eventEmitter.emit('tenOClock');
}

readFile();


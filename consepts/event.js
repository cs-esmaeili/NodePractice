const { EventEmitter } = require("events");

const em = new EventEmitter();

em.addListener("FirstEevent", (data) => {
  console.log(data);
});
em.on("Eevent", (data) => {
  console.log(data);
});

em.emit('FirstEevent', "javad");
em.emit('Eevent', "akbar");

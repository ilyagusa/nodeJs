var events = require('events');

var myEmit = new events.EventEmitter();
myEmit.on('some_event', function(text){
  console.log(text);
});

myEmit.emit('some_event','тест обработчика событий');

var events = require('events');
var util = require('util');

var Cars = function(model){
  this.model = model;
};

util.inherits(Cars, events.EventEmitter);

var bmw = new Cars('BMW');
var audi = new Cars('Audi');

var cars = [bmw,audi];
cars.forEach(function(item){
  item.on('speed', function(text){
  console.log(item.model + " speed is - " + text);
  });
});


bmw.emit('speed', '250km/h');
audi.emit('speed', '220km/h');

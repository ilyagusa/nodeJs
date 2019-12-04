const EventEmmiter = require('events')

 // const emmiter = new EventEmmiter()
//
// emmiter.on('anything', data =>{
//   console.log('ON: ',data);
// })
// emmiter.emit('anything', {a:1})
//
// setTimeout(() => {
//   emmiter.emit('anything', {b:2})
// }, 1500)
//

class Dispatcher extends EventEmmiter{
  subcribe(eventName, cb){
    console.log('[Subcribe...]')
    this.on(eventName,cb)
  }

  dispatch(eventName,data){
    console.log('[Disp...]');
    this.emit(eventName, data)
  }
}


const dis = new Dispatcher()
dis.subcribe('aa', data => {
  console.log('ON', data);
})

dis.dispatch('aa',{aa:25})

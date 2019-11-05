var memes = function(mem){
  var str = '';
  for(var i=0;i<mem.length;i++){
    str+=mem[i];
    str+=" ";
  }
  return str
};

var arr = ['lol','kek','cheburek'];

console.log(memes(arr));

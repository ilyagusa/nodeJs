var arr_count = function (arr) {
  return `В массиве находится ${arr.length} элементов`;
};

var multiply = function (x,y){
  return  `${x}*${y} = ${x*y}`;
};

var some_value = 500;

module.exports = {
  arr_count: arr_count,
  multiply: multiply,
  some_value: some_value
};

function randomize_list(array){
  var result = [];
  var i = 0;
  while (i < array.length){
    var random_index = Math.floor(Math.random() * array.length);
    var value = array.splice(random_index, 1);
    result.push(value);
  }
  return result;
}

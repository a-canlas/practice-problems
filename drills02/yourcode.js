

function countOccurences(array, word){
  var number_of_times = 0;
  for(var index = 0; index < array.length; index++){
    if(array[index] === word){
      number_of_times ++;
    }
  }
  return number_of_times;
}

function wordLengths(array){
  var result = [];
  for(var index = 0; index < array.length; index++){
    var word_length = array[index].length;
    result.push(word_length);
  }
  return result;
}

function getMinMaxMean(array){
  var minimum = 100000;
  var maximum = -100000;
  var mean = 0;
  for(var index = 0; index < array.length; index++){
    if(array[index] < minimum){
      minimum = array[index];
    }
    else if(array[index] > maximum){
        maximum = array[index];

    }
    mean += array[index];
  }
  mean /= array.length;
  result = {'min': minimum, 'max': maximum, 'mean': mean};
  return result;

}

function findMode(array){
  var result;
  var highest_count = 0;
  for(var outer = 0; outer < array.length; outer++){
    var current_count = 0;
    var current_number = array[outer];
    for(var inner = 0; inner < array.length; inner++){
      if(current_number === array[inner]){
        current_count++;
      }
      if(current_count >= highest_count){
        highest_count = current_count;
        result = current_number;
      }
    }
  }
  return result;
}

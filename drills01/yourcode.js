
function sumArray(array){
  var result = null;
  for(var i = 0; i < array.length; i++){
    result += array[i];
  }
  return result;
}

function fitWithinVal(array, target_sum){
  var result = [];
  var summed_num = null;
  for(var i = 0; i < array.length; i++){
    if(summed_num + array[i] <= target_sum){
      summed_num += array[i];
      result.push(array[i]);
    }
  }
  return result;
}

function getAllNamesShorterThan(array, num){
  var result = [];
  for(var i = 0; i < array.length; i++){
    var index_value = array[i];
    if(index_value.length < num){
      result.push(index_value);
    }
  }
  return result;
}

function makeLabel(person){
  var result = null;

  result = person['greeting'] + " ";
  result+= person['givenName'] + " ";
  result+= person['familyName'] + "\n";
  result+= person['home address']['streetNumber'] + " ";
  result+= person['home address']['streetName'] + "\n";
  result+= person['home address']['city'] + ", ";
  result+= person['home address']['state'] + " ";
  result+= person['home address']['zip'];

  return result;
}

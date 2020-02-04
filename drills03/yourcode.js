

function getPath(path_name){
  var result = path_name.split('/');
  return result;
}

function getPathParts(url_string){

  var url = new URL(url_string);
  var protocol = url.protocol;
  var host = url.host;
  var port_number;
  if(protocol === 'http:'){
    port_number = 80;
  }
  else if(protocol === 'https:'){
    port_number = 443;
  }
  var path_name = url.pathname;
  var cut_line = path_name.lastIndexOf('/');
  cut_line = cut_line + 1;
  var file_name = path_name.slice(cut_line);
  path_name = path_name.slice(0, cut_line);
  var result = {
    'protocol': protocol,
    'host': host,
    'port': port_number,
    'path': path_name,
    'file': file_name
  }
  return result;

}

function getCapitalCount(array){
  var result = 0;
  for(var index = 0, word =''; index < array.length; index++, word = ''){
    word = array[index];
    if(word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90){
      result++;
    }
  }
  return result;
}

function correctCalcChecker(array){
  var result = [];
  for(var index = 0; index < array.length; index++){
    var num1 = array[index]['num1'];
    var num2 = array[index]['num2'];
    var operator = array[index]['op'];
    var answer = array[index]['result'];
    if(doMath(num1, num2, operator, answer)){
      result.push(array[index]);
    }
  }
  return result;
}

function doMath(num1, num2, operator, answer){
  var result = 0;
  switch(operator){
    case '/':
      result = num1 / num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '+':
      result = num1 + num2;
  }
  if(result === answer){
    return true;
  }
  else{
    return false;
  }
}

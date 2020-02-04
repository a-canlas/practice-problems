

function changeElements(className){
  var selectedClass = $(className);
  for(var i = 0; i < selectedClass.length; i++){
    var changedText = null;
    var elementText = $(selectedClass[i]).text() // you can wrap javascript in jQuery wrapper to use jQuery methods
    switch (elementText){
      case 'one':
        changedText = 1;
        break;
      case 'two':
        changedText = 2;
        break;
      case 'three':
        changedText = 3;
        break;
      case 'four':
        changedText = 4;
        break;
      case 'five':
        changedText = 5;
        break;
      case 'six':
        changedText = 6;
        break;
      case 'seven':
        changedText = 7;
        break;
      case 'eight':
        changedText = 8;
        break;
      case 'nine':
        changedText = 9;
        break;
      default:
        break;
    }
    if(changedText){
      $(selectedClass[i]).text(changedText);
    }
  }
}

function appendTextToElement(elementClass, concatWord){
  var selectedClass = $(elementClass);
  for(var i = 0; i < selectedClass.length; i++){
    var textValue = $(selectedClass[i]).text();
    // Why do I still have to use the jQuery selector for selectedClass if it was referenced on line 46?
    $(selectedClass[i]).text(textValue + concatWord);
  }
}

function addClass(classToFind, classToAdd){
  var selectedClass = $(classToFind);
  var changedElementCount = 0;
  for(var i = 0; i < selectedClass.length; i++){
    $(selectedClass).addClass(classToAdd);
    changedElementCount++;
  }
  return changedElementCount;
}

function removeElements(classToRemove){
  $(classToRemove).remove();
}

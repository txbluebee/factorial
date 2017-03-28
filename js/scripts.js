$(document).ready(function() {
  $("form").submit(function(event) {
    var numberInput = parseInt($("#number").val());
    var numberArray = [];
    numberArray.push(numberInput);
    for (var i = numberInput; i > 1; i -= 1) {
      numberInput -= 1;
      numberArray.push(numberInput);
    }
    console.log(numberArray);

    var newNumber = 1;
    if(numberInput !== 0) {
      for (var i = 0; i < numberArray.length; i++ ) {
        newNumber *= numberArray[i];
      }
    }
    console.log(newNumber);
    alert(newNumber);

    event.preventDefault();
  });
});

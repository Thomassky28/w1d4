var countdownGenerator = function (x) {
  /* your code here */
  var startNumb = x;

  return function (){
    startNumb -= 1;
    var a;
    if (startNumb > 1) {
      a = startNumb
    } else if (statNumb === 0){
      return "Blast off"
    }else if (statNumb < 0) {
      return "Rockets already gone, bub!"
    }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
































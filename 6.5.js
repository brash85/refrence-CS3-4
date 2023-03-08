// Start function for the example will run when the test button is clicked
function example() {
  var area1 = areaOfRect(20, 50);
  var area2 = areaOfRect(40, 80);
}
function areaOfRect(length, width) {
  var area = length * width;
  return area;
}




// Start function for problem 1
function problem1() {
  console.log(isEven(5))
}

function isEven(num) {
  if (num % 2 == 0) {
    return (true);
  } 
  else {
    return (false);
  }
}








// Start function for problem 2
function problem2() {
  alert(min(3, 2));
}
function min(num1, num2) {
  if (num1 < num2) {
      return (num1)
  }
  else{
    return(num2)
  }
}
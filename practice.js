// Problem #1
function minToSec(min){
  var sec = min * 60;
  return sec;


}
console.log(minToSec(1));
console.log(minToSec(5))
//  problem #2
function lessThan100(num1, num2) {
  var right = (num1 + num2 <= 100);
  var wrong = (num1 + num2 > 100);
 if (num1 + num2 <= 100 ) {
    return(right);
 } else {
    return(wrong);
 }
}
console.log(lessThan100(30, 60))
//problem #3
function areaOfTriangle(base, height){
  var area = (base * height / .5);
  return area;
}
console.log(areaOfTriangle(6,10))
//problem #4 
function nextEven(num1){
  var nextNum = num1;
  if(num1 % 2 ==0){
    nextNum = num1 + 2;
    return nextNum;
  }else{
    nextNum = num1 +1;
    return nextNum 
  }
}
//problem #5..
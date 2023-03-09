/* 
  Warm-up
  1. Create a global variable called favFoods and assign it to be an array strings that are your top three favorite foods.
  2. Use console.log() to print out each element to the console individually
*/
var favFoods = ["wings","spagetii","chicken"];
console.log(favFoods[0]);
console.log(favFoods[1]);
console.log(favFoods[2]);
console.log(typeof(favFoods));


// Length property examples
console.log(favFoods.length);
console.log(favFoods[3]);


// .push() examples
var newLength = favFoods.push("quesedilla");
console.log(favFoods);

// .pop() examples

 var daysOftheweek = [];
function problem1(){
  var weekend = [];
  daysOftheweek.push("monday");
  daysOftheweek.push("tuesday");
  daysOftheweek.push("wednesday");
  daysOftheweek.push("thursday");
  daysOftheweek.push("friday");
  daysOftheweek.push("saturday");
  daysOftheweek.push("sunday");
  printDays();
  var day = daysOftheweek.pop();
  weekend.push(day);
  var day2 = daysOftheweek.pop();
  weekend.push(day2);
}
function printDays(){
  console.log(daysOftheweek[0]);
  console.log(daysOftheweek[1]);
  console.log(daysOftheweek[2]);
  console.log(daysOftheweek[3]);
  console.log(daysOftheweek[4]);
  console.log(daysOftheweek[5]);
  console.log(daysOftheweek[6]);


}
console.log(daysOftheweek)

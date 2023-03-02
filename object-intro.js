/* When the script file is loaded, execution automatically begins at the top of the file */

/* console.log("hello");

var player = {
  name: "steve",
  health: 100,
  inventory: "sheild",
  showInfo: function() {
    console.log(this.name + "has" + this.health + " and an " + this.inventory)
  },
  takeDamage: function() {
    this.health -= 15;
  }
}


// example property and method access 
player.showInfo();
player.health = 50; 
player.showInfo();
player.takeDamage();*/




var pizza = {
  size: "Large",
  toppings: "pepperoni and jalapeno",
  cost: 11.95,
  showInfo: function (){
    console.log(this.size + this.toppings + " is " + this.cost)
  }
}

pizza.showInfo();
pizza.size = "medium";
pizza.showInfo(); 
pizza.toppings = "pinnaple";

var student = {
  firstname: "Ben";
  lastname: "Rash";



}




/* When the script file is loaded, execution automatically begins at the top of the file */

console.log("hello");

var player = {
  name: "Steve",
  health: 100,
  inventory: "axe",
  showInfo: function() {
    console.log(this.name + " has " + this.health + " and an " + this.inventory);
  },
  takeDamage: function() {
    this.health -= 15;
  }
}

// example property and method access
//player.showInfo();
//player.health = 50;
//player.showInfo();
//player.takeDamage();
//player.showInfo();
//console.log(player["inventory"]);
//console.log(player.inventory);

var pizza = {
  size: "large",
  toppings: "pepperoni ana jalapeno",
  cost: 11.95,
  showInfo: function() {
    console.log(" A " + this.size + " pizza with " + this.toppings + " is " + this.cost);
  }
}

pizza.showInfo();
pizza.size = "small"
pizza.showInfo();

var student = {
  first: "Anthony",
  last: "Trujillo",
  age: 15,
   martic: 0612323001,
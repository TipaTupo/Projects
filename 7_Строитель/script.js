let colorlist = ['gold', 'magenta', 'green', 'red']

let indicator1;

function setup() {
  createCanvas(600, 500);
  textAlign(CENTER);
  
  indicator1 = new ConcreteIndicator("x-axis", 0, width, 1);
  indicator2 = new ConcreteIndicator("y-axis", 0, height, 2);
}

function draw() {
  background(250);
  indicator1.show();
  indicator2.show();
}
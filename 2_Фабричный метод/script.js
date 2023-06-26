let num_of_sides, comment;
let angle = -90;
let shape;
let flag = false;
let acc = 0;

function setup() {
  createCanvas(400,400);
  rectMode(CENTER);
  
  num_of_sides = select("#sides");
  num_of_sides.input(makeShape);
}

function makeShape() {
  let n = int(num_of_sides.value());
  if (Number.isInteger(n)){
    const factory = new ShapeFactory();
    shape = factory.createPolygon(n);
    
    flag = true;
    acc = 0;
  }
}

function draw() {
  translate(width / 2, height / 2);
  background(0);
  angleMode(DEGREES);
  rotate(angle);
  noFill();
  strokeWeight(10);
  shape?.show();
  angle += 0.05;
  if (flag && num_of_sides.value() == "") {
    shape.len -= acc;
    acc += 0.1;
    if (shape.len < 1) {
      flag = false;
      shape = null;
    }
  }
}
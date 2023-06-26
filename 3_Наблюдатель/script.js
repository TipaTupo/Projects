let shape_index = 0;
let name_of_shape;
let shape, tria;
let shapes = [];

function setup() {
  createCanvas(800, 600);
  rectMode(CORNERS);
  ellipseMode(CORNERS);

  name_of_shape = select("#SHAPE");
  name_of_shape.changed(nextShape);
}

function nextShape(){
  shape_index = int(name_of_shape.value());
  console.log("changed", shape_index);
  if (shape_index == 2)
    tria = [];
  else
    tria = undefined;
}

function mousePressed() {
  console.log("clicked");
  let x = mouseX;
  let y = mouseY;
  if (x >= 0 && x < width && y >= 0 && y < height)
    makeShape(x, y);
}

function makeShape(x, y){
  console.log("making shape");
  switch (shape_index){
    case 0: {
      shape = new Rectangle(x, y, x, y);
      break;
    }
    case 1: {
      shape = new Ellipse(x, y, x, y);
      break;
    }
    case 2: {
      tria.push([x, y]);
      if (tria.length == 3) {
        shape = new Triangle(tria);
        tria = [];
        shapes.push(shape);
        shape = undefined;
      }
      break;
    }
  }
}

function mouseDragged() {
  if (shape) {
    shape.update(mouseX, mouseY);
  }
}

function mouseReleased() {
  if (shape) {
    shape.update(mouseX, mouseY);
    shapes.push(shape);
    shape = undefined;
  }
}

function draw(){
  background(250);
  for (let shp of shapes)
    shp.show();
  if (shape)
    shape.show();
}
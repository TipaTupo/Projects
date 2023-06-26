let next_btn, cur_shape, endless;
let shape_index = 0;
let name_of_shape = ["Выберите фигуру", "Прямоугольник",
                     "Круг", "Треугольник"];
let shape, s = 0;
let shapes = [];

function setup() {
  createCanvas(800, 600);
  rectMode(CENTER);

  cur_shape = select("#currentShape");
  next_btn = select("#nextShape");
  endless = select("#endless");
  next_btn.mousePressed(nextShape);
}

function nextShape(){
  shape_index = (shape_index + 1) % name_of_shape.length;
  cur_shape.html(name_of_shape[shape_index]);
}

function doubleClicked(){
  shapes.push(shape);
  s = 0;
  if (!endless.checked()){
    shape_index = 0;
    cur_shape.html("Выберите фигуру"); 
  }
}

function mouseWheel(event) {
  s += event.delta;
  return false;
}

function makeShape(x, y){
  switch (shape_index){
    case 1: {
      shape = new Rectangle(x, y, s);
      break;
    }
    case 2: {
      shape = new Circle(x, y, s);
      break;
    }
    case 3: {
      shape = new Triangle(x, y, s);
      break;
    }
    default:
      shape = new Rectangle(-1000,-1000,1);
  }
}

function draw(){
  background(230);
  let x = mouseX;
  let y = mouseY;
  makeShape(x,y);

  for (let shp of shapes)
    shp.show();
  shape.show();
}
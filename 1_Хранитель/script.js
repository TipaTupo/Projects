let shapes = [];
let index_shape = -1, indices = [];
let ct;
let rows_step = 0, cols_step = 0, off, w, h;
let cols, rows, btnLoad, btnRefresh, btnShuffle;
let backward = false;

function setup() {
  createCanvas(windowWidth * 0.95, windowHeight * 0.7);
  rectMode(CENTER);

  rows = select("#rows");
  rows.input(createGrid);
  cols = select("#cols");
  cols.input(createGrid);
  btnShuffle = select("#doShuffle");
  btnShuffle.mousePressed(doShuffle);
  btnLoad = createButton("Шаг назад");
  btnLoad.mousePressed(undo);
  btnRefresh = createButton("Сбросить все");
  btnRefresh.mousePressed(toStart);
}

function createGrid() {
  shapes = [];
  indices = [];
  let i = int(rows.value());
  let j = int(cols.value());
  if (Number.isInteger(i) && !(isNaN(i)) && Number.isInteger(j) && !(isNaN(j))) {
    rows_step = i;
    cols_step = j;
    fillGrid();
  }
}

function fillGrid() {
  shapes = [];
  ct = new Caretaker();
  
  offX = float(50) / (cols_step / 10 + 1);
  offY = float(50) / (rows_step / 10 + 1);
  w = (width - (offX * (cols_step + 1))) / cols_step; 
  h = (height - (offY * (rows_step + 1))) / rows_step;
  
  for (let i = 0; i < rows_step; i++) {
    for (let j = 0; j < cols_step; j++) {
      let colS = color(map(j, cols_step, 0, 160, 255),
                      map(i, rows_step, 0, 160, 255), 100, 255);
      let colF = color(map(j, cols_step, 0, 160, 255),
                      map(i, rows_step, 0, 160, 255), 100, 0);
      let shape = new Shape((offX * (j + 1)) + (w * j) + (w / 2),
                            (offY * (i + 1)) + (h * i) + (h / 2),
                            w, h, colS, colF);
      shapes.push(shape);
    }
  }
}

function mousePressed() {
  for (let i = 0; i < shapes.length; i++) {
    let [x, y, w, h] = shapes[i].getValues();
    let flag = mouseX >= (x - w / 2) && mouseX < (x + w / 2) &&
               mouseY >= (y - h / 2) && mouseY < (y + h / 2) &&
               mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height;
    if (flag)
      index_shape = i;
  }
  if (index_shape >= 0) {
    let s = shapes[index_shape];
    let col = s.getColor();
    col._array[3] = 0.69;
    s.setColor(col);
    remember(s, index_shape);
  }
}

function mouseDragged() {
  if (index_shape >= 0) {
    shapes[index_shape].move(mouseX, mouseY);
  }
}

function mouseReleased() {
  if (index_shape >= 0) {
    let col = shapes[index_shape].getColor();
    col._array[3] = 0;
    shapes[index_shape].setColor(col);
    index_shape = -1;
  }
}

function doShuffle() {
  for (let _ of shapes) {
    let s = random(shapes);
    remember(s, shapes.indexOf(s));
    s.move(random(w, width - w), random(h, height - h));
  }
  backward = false;
}

function remember(s, i) {
  // console.log("Saving");
  indices.push(i);
  ct.saveState(s);
}

function undo() {
  if (indices.length > 0)
    ct.loadState(shapes[indices.splice(-1,1)[0]]);
  // console.log("Undoing", indices.length);
}

function toStart() {
  backward = true;
}

function draw() {
  background(51);
  strokeWeight(float(20) / pow((max(rows_step, cols_step) + 0.001), 0.8));
  for (let s of shapes)
    s.show();
  if (indices.length == 0)
    backward = false;
  if (backward && frameCount % 2 == 0)
    undo();
}
//          color(0,133,133)  = #008585
// colors = color(38,153,153) = #269999
//          color(0,204,204)  = #00cccc

let timer, cntdwn, btnStart, btnStop, btnRec;
let rec_t;
let running = false, err = false;
let countdown;
let instances = [], lines = [];
let rows, cols;

function setup() {
  noCanvas();
  calcGrid();

  btnStart = select("#START");
  btnStart.mousePressed(run);
  btnStop = select("#STOP");
  btnStop.mousePressed(stop);
  // btnRec = select("#RECORD");
  // btnRec.mousePressed(saveRec);
  timer = select("#TIMER");
  cntdwn = select("#COUNTDOWN");
}

function generateInstances() {
  console.log("generating instances");
  let inst = [];
  let op = ["+", "-"];
  while (inst.length < 40) {
    let a = int(random(10));
    let b = int(random(10));
    let o = random(op);
    if (o == "+") {
      if ((a + b) <= 9)
        inst.push(a + o + b);
    } else {
      if ((a - b) >= 0)
        inst.push(a + o + b);
    }
  }
  return inst;
}

function run() {
  console.log("running");
  instances = generateInstances();
  timer.html("");
  countdown = 0;
  for (let ln of lines) {
    for (let rw of ln) {
      rw.html("");
    }
  }
  
  prepare();  
}

function prepare() {
  if (countdown == 0) {
    console.log("countdown", 3);
    cntdwn.html(3);
    cntdwn.class("ctdn ctdn-three");
    setTimeout(prepare, 500);
  } else if (countdown == 1) {
    console.log("countdown", 2);
    cntdwn.html(2);
    cntdwn.class("ctdn ctdn-two");
    setTimeout(prepare, 500);
  } else if (countdown == 2) {
    console.log("countdown", 1);
    cntdwn.html(1);
    cntdwn.class("ctdn ctdn-one");
    setTimeout(prepare, 500);
  } else {
    cntdwn.html("");
    cntdwn.class("ctdn");
    start();
  }
  countdown++;
}

function start() {
  console.log("starting");
  running = true;
  err = false;
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      console.log("adding instance");
      let cell = lines[i][j];
      cell.html(instances[i * cols + j]);
    }
  }
  
  rec_t = toSec(hour(), minute(), second());
}

function stop() {
  
  if (running) {
    console.log("stoped");
    rec_t -= toSec(hour(), minute(), second());
    timer.html(toHMS(abs(rec_t)));
  }
  
  running = false;
}

function saveRec() {
  
  if (!running && !err) {
    console.log("saving");
    
  }
  err = true;
}

function toSec(h, m, s) {
  return (h * 3600 + m * 60 + s);
}

function toHMS(sec) {
  let m = int(sec / 60);
  sec -= m * 60;
  return join(["Результат:", m, "мин.", sec, "сек."], " ");
}

function calcGrid() {
    console.log("making grid");
  if (windowWidth > windowHeight) {
    rows = 5;
    cols = 8;
  } else {
    rows = 8;
    cols = 5;
  }
  for (let i = 0; i < rows; i++) {
    let ln = createDiv();
    let rw = [];
    ln.class('answ');
    for (let j = 0; j < cols; j++) {
      let inst = createP();
      inst.class('answ');
      inst.style("margin: 20px");
      inst.parent(ln);
      rw.push(inst);
    }
    lines.push(rw);
  }
}

function keyPressed() {
  if (keyCode == 32) {
    stop();
  }
}
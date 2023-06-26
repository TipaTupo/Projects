let timer, btnStart, btnStop, btnRec;
let rec_t;
let running = false, err = false;
let countdown;
let instances = [], txt = [];

function setup() {
  createCanvas(windowWidth * 0.99, windowHeight * 0.7);
  rectMode(CENTER);
  translate(width / 2, height / 2);
  textFont('Helvetica');
  background(200);
  
  instances = generateInstances();
  txt = toText(instances);

  btnStart = select("#START");
  btnStart.mousePressed(run);
  btnStop = select("#STOP");
  btnStop.mousePressed(stop);
  btnRec = select("#RECORD");
  btnRec.mousePressed(saveRec);
  timer = select("#TIMER");
  // console.log(instances);
  // console.log(s);
  // let t1 = toSec(hour(), minute(), second());
  // let t2 = toHMS(t1);
  // console.log(t1, t2);
}

function generateInstances() {
  let inst = [];
  let op = ["+", "-"];
  while (inst.length < 20) {
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

function toText(arr) {
  let s  = "";
  let txt = [];
  for (let i = 0; i < arr.length; i++) {
    s += arr[i] + "    ";
    if (i % 10 == 9) {
      txt.push(s);
      s = "";
    }
  }
  return txt;
}

function run() {
  console.log("running");
  timer.html("");
  running = true;
  err = false;
  countdown = 0;
  prepare();  
}

function prepare() {
  let colors = [color(0,133,133),
                color(38,153,153),  
                color(0,204,204)]
  if (countdown < 3) {
    console.log("countdown", 3 - countdown);
    background(255);
    let f_size = 350;
    fill(colors[countdown]);
    noStroke();
    textSize(f_size);
    let x = -f_size * 0.26;
    let y = f_size * 0.32;
    text(3 - countdown, x - countdown, y);
    setTimeout(prepare, 1000);
  } else {
    background(255);
    start();
  }
  countdown++;
}

function start() {
  console.log("starting");
  rec_t = toSec(hour(), minute(), second());
}

function stop() {
  background(180,0,0);
  
  if (running) {
    console.log("stoped");
    rec_t -= toSec(hour(), minute(), second());
    timer.html(toHMS(abs(rec_t)));
  }
  
  running = false;
}

function saveRec() {
  background(0,0,180);
  
  if (!running && !err) {
    console.log("saving");
    
  }
  err = true;
}

function toSec(h, m, s) {
  return (h * 3600 + m * 60 + s);
}

function toHMS(sec) {
  if (!isNaN(sec)) {
    let m = int(sec / 60);
    sec -= m * 60;
    return join(["Результат:", m, "мин.", sec, "сек."], " ");
  } else {
    err = true;
    return 'Вы не нажали "Начать"';
  }
}

function windowResized() {
  resizeCanvas(windowWidth * 0.99, windowHeight * 0.7);
}
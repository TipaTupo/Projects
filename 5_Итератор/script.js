let ext, btnPlay, btnPause, btnStop;
let jpg = "jpg";
let png = "png";
let imgs = new Map([ [jpg, []], [png, []] ]);
let slideshow, iterator;
let timerId;

function preload() {
  let j = [];
  let p = [];
  for (let i = 1; i < 6; i++) {
    j.push(loadImage("images/photo" + i + "." + jpg));
    p.push(loadImage("images/photo" + i + "." + png));
  }
  imgs.set(jpg, j);
  imgs.set(png, p);
}

function setup() {
  createCanvas(800, 600);

  btnPlay = select("#PLAY");
  btnPlay.mousePressed(start);
  btnPause = select("#PAUSE");
  btnPause.mousePressed(stop);
  btnStop = select("#STOP");
  btnStop.mousePressed(end);
  ext = select("#EXTENSION");
  ext.changed(findImgs);
  
  slideshow = new ConcreteAggregate();
  iterator = slideshow.createIterator();
  findImgs();
}

function findImgs() {
  iterator.reset();
  let ex = ext.value();
  slideshow.reset();
  let photos = imgs.get(ex);
  for (let ph of photos)
    slideshow.addImage(ph);
}

function start() {
  if (iterator.hasNext(slideshow)) {
    let img = iterator.next(slideshow);
    image(img, 0 ,0, width, height);
    timerId = setTimeout(start, 1500);
  } else {
    end();
  }
}

function stop() {
  clearTimeout(timerId);
}

function end() {
  background(255);
  iterator.reset();
}
class Builder {

  start;
  stop;
  #y;
  #col;
  #name;
  
  constructor (name, start, stop, y) {
    this.start = start;
    this.stop = stop;
    this.#y = 150 * y;
    this.#col = color(random(180, 255), random(180, 255), random(180, 255));
    this.#name = name;
  }

  askY() {
    return this.#y;
  }

  askColor() {
    return this.#col;
  }

  askName() {
    return this.#name;
  }
  
  addTitle() {}
  addLine() {}
  addMark() {}
}

class ConcreteBuilder extends Builder {
  
  constructor(name, start, stop, counter) {
    super(name, start, stop, counter);
  }
  
  addLine() {
    this.addBorders();
    let y = this.askY();
    push();
    stroke(this.askColor());
    strokeWeight(5);
    line(50, y, width - 50, y);
    pop();
  }

  addBorders() {
    textSize(16);
    text(this.start, 50, this.askY() + 25);
    text(this.stop, width - 50, this.askY() + 25);
  }

  addTitle() {
    let y = this.askY() - 25;
    textSize(24);
    text(this.askName(), width / 2, y);
  }
  
  addMark() {
    let axis, measure;
    if (this.askName() == "x-axis") {
      axis = mouseX;
      measure = width;
    } else {
      axis = mouseY;
      measure = height;
    }
    let x = map(axis, this.start, this.stop, 50, measure - 50, true);
    let y = this.askY();
    let mark = map(axis, this.start, this.stop, 0, measure, true);
    push();
    fill(255);
    stroke(this.askColor());
    strokeWeight(4);
    circle(x, y, 20);
    pop();
    textSize(24);
    text(int(mark) + "px", x, y + 50);
  }
}
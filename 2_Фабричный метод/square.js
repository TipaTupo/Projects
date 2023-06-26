class Square extends Shape {

  constructor(r, g, b) {
    super(r, g, b);
    this.len *= 0.75;
  }

  show() {
    push();
    angleMode(RADIANS);
    stroke(this.getColor());
    square(0, 0, this.len * 2);
    pop();
  }
}
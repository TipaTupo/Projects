class Triangle extends Shape {

  constructor(r, g, b) {
    super(r, g, b);
    this.len *= 1.07;
  }

  show() {
    //console.log(this.len);
    push();
    angleMode(RADIANS);
    stroke(this.getColor());
    beginShape();
    for (let i = 0; i < TAU; i += (TAU / 3)) {
      let x = this.len * cos(i);
      let y = this.len * sin(i);
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
  }
}
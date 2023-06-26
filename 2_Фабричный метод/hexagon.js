class Hexagon extends Shape {
  
  constructor(r, g, b) {
    super(r, g, b);
  }

  show() {
    push();
    angleMode(RADIANS);
    stroke(this.getColor());
    beginShape();
    for (let i = 0; i < TAU; i += (TAU / 6)) {
      let x = this.len * cos(i);
      let y = this.len * sin(i);
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
  }
}
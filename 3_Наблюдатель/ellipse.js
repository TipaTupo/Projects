class Ellipse extends Shape { 

  constructor(x1, y1, x2, y2) {
    super(x1, y1, x2, y2, color(100, 255, 100));
  }

  update(x, y) {
    super.update(x, y);
  }

  show() {
    super.show();
    ellipse(this.x1, this.y1, this.x2, this.y2);
  }
} 
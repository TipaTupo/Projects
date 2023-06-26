class Shape { 
  
  constructor(x1, y1, x2, y2, col, x3, y3) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.c = col;
    if (x3 && y3) {
      this.x3 = x3;
      this.y3 = y3;
    }
  }

  update(x, y) {
    this.x2 = x;
    this.y2 = y;
  }

  show() {
    fill(this.c);
    stroke(0);
    strokeWeight(2);
  }
} 
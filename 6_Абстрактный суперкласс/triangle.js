class Triangle extends Shape{ 

  constructor(x, y, s){
    super(x, y, 50, 80, s);
    this.c = color(100, 100, 255 - this.c_offset);
  }

  show(){
    fill(this.c);
    stroke(0);
    strokeWeight(2);
    let x1 = this.x - (this.w / 2);
    let y1 = this.y + (this.h / 2);
    let x2 = this.x;
    let y2 = this.y - (this.h / 2)
    let x3 = this.x + (this.w / 2);
    let y3 = this.y + (this.h / 2);
    triangle(x1, y1, x2, y2, x3, y3);
  }
} 
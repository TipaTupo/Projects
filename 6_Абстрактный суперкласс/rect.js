class Rectangle extends Shape{ 

  constructor(x, y, s){
    super(x, y, 100, 80, s);
    this.c = color(255 - this.c_offset, 100, 100);
  }

  show(){
    fill(this.c);
    stroke(0);
    strokeWeight(2);
    rect(this.x, this.y, this.w, this.h);
  }
} 
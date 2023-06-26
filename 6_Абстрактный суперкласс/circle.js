class Circle extends Shape{ 

  constructor(x, y, s){
    super(x, y, 70, 70, s);
    this.c = color(100, 255 - this.c_offset, 100);
  }

  show(){
    fill(this.c);
    stroke(0);
    strokeWeight(2);
    circle(this.x, this.y, this.w);
  }
} 
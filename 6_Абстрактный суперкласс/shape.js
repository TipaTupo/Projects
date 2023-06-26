class Shape  { 
  
  constructor(x_, y_, wid, len, size){
    this.x = x_;
    this.y = y_;
    this.w = wid + size;
    this.h = len + size;
    this.c_offset = shapes.length;
  }

  show(){
    throw new Error("Method 'show()' must be implemented.");
  }
} 
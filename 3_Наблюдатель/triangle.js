class Triangle extends Shape{ 

  constructor(arr) {
    let x1 = arr[0][0];
    let y1 = arr[0][1];
    let x2 = arr[1][0];
    let y2 = arr[1][1];
    let x3 = arr[2][0];
    let y3 = arr[2][1];
    super(x1, y1, x2, y2, color(230, 200, 150), x3, y3);
  }

  show() {
    super.show();
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }
} 
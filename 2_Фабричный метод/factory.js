class ShapeFactory {
  
  createPolygon(n) {
    switch (n) {
      case 3 :
        return new Triangle(0, 255, 0);
      case 4 :
        return new Square(0, 0, 255);
      case 5 :
        return new Pentagon(255, 0, 0);
      case 6 :
        return new Hexagon(255, 255, 0);
      default:
        return new Square(0, 0, 0);
    }
  }
}
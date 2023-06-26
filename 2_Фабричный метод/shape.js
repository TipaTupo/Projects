class Shape {

  #c;
  len = 150;
  
  constructor(r, g, b) {
    this.#c = color(r, g, b);
  }

  getColor() {
    return this.#c;
  }
  
  show() {
    throw new Error("Method 'show()' must be implemented.");
  }

  name() {
    throw new Error("Method 'name()' must be implemented.");
  }
}
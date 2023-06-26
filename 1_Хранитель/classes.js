class Originator {

  getMemento() {};
  setMemento() {};
}

class Shape extends Originator {    

  #x;
  #y;
  #w;
  #h;
  #cS;
  #cF;

  constructor (x, y, w, h, colS, colF) {
    super();
    this.#x = x;
    this.#y = y;
    this.#w = w;
    this.#h = h;
    this.#cS = colS;
    this.#cF = colF;
  }

  show() {
    push();
    let colF = this.#cF;
    fill(colF);
    let colS = this.#cS;
    stroke(colS);
    rect(this.#x, this.#y, this.#w, this.#h);
    pop();
  }

  getValues() {
    return [this.#x, this.#y, this.#w, this.#h];
  }

  getColor() {
    return this.#cF;
  }

  setColor(col) {
    this.#cF = col;
  }

  move(x, y) {
    this.#x = x;
    this.#y = y;
  }

  getMemento() {
    return new Memento(this.#x, this.#y, this.#w, this.#h, this.#cS, this.#cF);
  }

  setMemento(memento) {
    let n = memento.getState();
    [this.#x, this.#y, this.#w, this.#h, this.#cS, this.#cF] = n;
  }
}

class Memento {
  
  #x;
  #y;
  #w;
  #h;
  #cS; 
  #cF;

  constructor(x, y, w, h, colS, colF) {
    this.#x = x;
    this.#y = y;
    this.#w = w;
    this.#h = h;
    this.#cS = colS;
    this.#cF = colF;
  }

  getState() {
    return [this.#x, this.#y, this.#w, this.#h, this.#cS, this.#cF];
  }
}

class Caretaker {
  
  #memento = [];

  saveState(originator) {
    if (originator == null)
      throw new ArgumentNullException("originator is null");
    this.#memento.push(originator.getMemento());
  }

  loadState(originator)
  {
    if (originator == null)
      throw new ArgumentNullException("originator is null");
    if (this.#memento == null)
      throw new ArgumentNullException("memento is null");

    originator.setMemento(this.#memento.splice(-1,1)[0]);
  }
}

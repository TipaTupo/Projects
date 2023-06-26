class Aggregate {
  
  createIterator() {}

  setValues() {}

  reset() {}

  hasNext() {}

  next() {}
}

class ConcreteAggregate extends Aggregate {

  #files = [];
  
  createIterator() {
    return new ImageIterator();
  }

  addImage(img) {
    this.#files.push(img);
  }

  hasNext(n) {
    if (this.#files.length > n)
      return true;
    else
      return false;
  }

  next(n) {
    return this.#files[n];
  }

  reset() {
    this.#files = [];
  }
}

class Iterator {
  
  hasNext() {}
  
  next() {}

  reset() {}
}

class ImageIterator extends Iterator {

  #current = -1;
  
  hasNext(sshow) {
    this.#current++;
    return sshow.hasNext(this.#current);
  }

  next(sshow) {
    return sshow.next(this.#current);
  }

  reset() {
    this.#current = -1;
  }
}
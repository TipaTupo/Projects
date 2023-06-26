class ConcreteIndicator {

  builder;

  constructor(name, start, stop, counter) {
    this.builder = new ConcreteBuilder(name, start, stop, counter);
  }

  show() {
    this.builder.addTitle();
    this.builder.addLine();
    this.builder.addMark();
  }
}
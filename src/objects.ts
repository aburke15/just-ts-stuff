/*
abstract class SomeAbstractClass {
  
}

interface SomeInterface {
  someMethod(): void;
}

class SomeClass {
  constructor() {

  }

  other stuff
}

someFunc(): void {

}

class keywords
private - only accessible within the class
protected - only accessible within the class and subclasses
public - accessible anywhere
*/

// encapsulation
// abstraction
// inheritance
// polymorphism

/*
  let age: number;
  age = 10;

  shapes
  
  - square
  - rectangle
  - triangle

  what are some attributes of a shape?
  - color
  - area
  - perimeter


  what are some behaviors of a shape?
  - get color
  - set color
  - get area
  - calculate area
  - get perimeter
  - calculate perimeter
  - get number of sides
*/
abstract class Shape {
  public color: string;
  public numberOfSides: number;

  public constructor(color: string, numberOfSides: number /* ??? */) {
    this.color = color;
    this.numberOfSides = numberOfSides;
  }

  public getColor(): string {
    return this.color;
  }

  public getNumberOfSides(): number {
    return this.numberOfSides;
  }
}

class Square extends Shape {}

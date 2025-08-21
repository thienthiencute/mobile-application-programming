console.log("Start running index.ts");  // kiểm tra ts-node có chạy không

class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  displayInfo(): string {
    return `width: ${this.width}, height: ${this.height}`;
  }

  calcArea(): number {
    return this.width * this.height;
  }

  calcPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const rectangle = new Rectangle(5, 5);

console.log("Rectangle Information:");
console.log(rectangle.displayInfo());
console.log(`Area: ${rectangle.calcArea()}`);
console.log(`Perimeter: ${rectangle.calcPerimeter()}`);

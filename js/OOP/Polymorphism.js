// Superclass
class Shape {
    calculateArea() {
      // Default implementation
      console.log("Cannot calculate area of unknown shape.");
    }
  }
  
  // Subclasses
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  // Polymorphic behavior
  const rectangle = new Rectangle(5, 10);
  const circle = new Circle(7);
  
  const shapes = [[rectangle, circle]];
  
  shapes.flat(

  ).forEach((shape) => {
    console.log("Area:", shape.calculateArea());
  });

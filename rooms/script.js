class room {
  constructor(name, length, width, number) {
    this.name = name;
    this.length = length;
    this.width = width;
    this.available = true;
    this.capacity = number;
  }

  getArea() {
    return this.length * this.width;
  }

  getPerimeter() {
    return 2 * (this.length + this.width);
  }
}

const room1 = new room("sun", 30, 20, 15);
const room2 = new room("Green", 15, 20, 18);

console.log("Room 1:");
console.log("Name:", room1.name);
console.log("Length:", room1.length);
console.log("Width:", room1.width);
console.log("Area:", room1.getArea());
console.log("Perimeter:", room1.getPerimeter());
console.log("Room 1 - Available:", room1.available);
console.log("Room 1 - Capacity:", room1.capacity);

console.log("\nRoom 2:");
console.log("Name:", room2.name);
console.log("Length:", room2.length);
console.log("Width:", room2.width);
console.log("Area:", room2.getArea());
console.log("Perimeter:", room2.getPerimeter());
console.log("Room 2 - Available:", room2.available);
console.log("Room 2 - Capacity:", room2.capacity);

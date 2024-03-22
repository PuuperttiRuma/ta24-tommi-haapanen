const firstTriangle = { width: 7.0, length: 3.5 };
const secondTriangle = { width: 4.3, length: 6.4 };
const thirdTriangle = { width: 5.5, length: 5.0 };

const calculateTriangleArea = (triangle: {
  width: number;
  length: number;
}): number => (triangle.width * triangle.length) / 2.0;

const firstTriangleArea = calculateTriangleArea(firstTriangle);
const secondTriangleArea = calculateTriangleArea(secondTriangle);
const thirdTriangleArea = calculateTriangleArea(thirdTriangle);

console.log("Area of first triangle: " + firstTriangleArea);
console.log("Area of second triangle: " + secondTriangleArea);
console.log("Area of third triangle: " + thirdTriangleArea);

const maximum = (a: number, b: number, c: number) => {
  if (a > b && a > c) {
    return a;
  } else if (b > c) {
    return b;
  } else {
    return c;
  }
};

const printLargestAreaOfTriangles = (
  triangle1: { width: number; length: number },
  triangle2: { width: number; length: number },
  triangle3: { width: number; length: number }
) => {
  const largest = maximum(calculateTriangleArea(triangle1), calculateTriangleArea(triangle2), calculateTriangleArea(triangle3));
  console.log(`Largest area of the triangles is ${largest}`);
};

printLargestAreaOfTriangles(firstTriangle, secondTriangle, thirdTriangle)

// Could be improved by putting everything in Arrays, but I don't know yet how to do the typing in TS.
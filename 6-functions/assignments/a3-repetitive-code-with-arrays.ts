{
  const triangles = [
    { width: 7.0, length: 3.5 },
    { width: 4.3, length: 6.4 },
    { width: 5.5, length: 5.0 },
  ];

  const calculateTriangleArea = (triangle: {
    width: number;
    length: number;
  }): number => (triangle.width * triangle.length) / 2.0;

  const findLargestArea = (triangles: {width: number, length: number}[]) => {
    let largestArea = calculateTriangleArea(triangles[0]);
    for (const triangel of triangles) {
      if (largestArea < calculateTriangleArea(triangel)) {
        largestArea = calculateTriangleArea(triangel);
      }
    }
    return largestArea;
  };

  console.log("Area of first triangle: " + calculateTriangleArea(triangles[0]));
  console.log("Area of second triangle: " + calculateTriangleArea(triangles[1]));
  console.log("Area of third triangle: " + calculateTriangleArea(triangles[2]));

  console.log(`Largest area of the triangles is ${findLargestArea(triangles)}`);
}

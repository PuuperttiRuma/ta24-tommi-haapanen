{
  const objectArray = [
    { x: 14, y: 21, type: "tree", toDelete: false },
    { x: 1, y: 30, type: "house", toDelete: false },
    { x: 22, y: 10, type: "tree", toDelete: true },
    { x: 5, y: 34, type: "rock", toDelete: true },
    null,
    { x: 19, y: 40, type: "tree", toDelete: false },
    { x: 35, y: 35, type: "house", toDelete: false },
    { x: 19, y: 40, type: "tree", toDelete: true },
    { x: 24, y: 31, type: "rock", toDelete: false },
  ];

  // b)
  console.log(objectArray.map((object) => {
    if (object?.toDelete){
      return null;
    } else {
      return object;
    }
  }));

  // a)
  for (let i = 0; i < objectArray.length; i++) {
    if (objectArray[i]?.toDelete) {
      objectArray[i] = null;
    }
  }

  console.log(objectArray);

  // c)

  // The a) version wouldn't take that much memory, as it just modifies the original array.
  // The b) version would double the memory usage, as it will create a totally new array.
  // If this operation is done once in a while, it's possible that using map wouldn't be a
  // actually a problem, but if the operation is done often, then it will become a problem
  // with big datasets.
}

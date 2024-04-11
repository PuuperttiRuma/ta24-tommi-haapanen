{
  const mergeSort = (numbers: number[]): number[] => {
    if (numbers.length === 1) {
      return numbers;
    }
    const middlePoint = Math.round(numbers.length / 2);
    let leftList = numbers.slice(0, middlePoint);
    let rightList = numbers.slice(middlePoint, numbers.length);

    //Dividing phase
    leftList = mergeSort(leftList);
    rightList = mergeSort(rightList);

    //Building phase
    return mergeSubList(leftList, rightList);
  };

  const mergeSubList = (leftList: number[], rightList: number[]): number[] => {
    for (let i = 0; i < leftList.length; i++) {
      if (rightList.length === 0) {
        return leftList;
      }
      if (leftList[i] > rightList[0]) {
        leftList.splice(i, 0, rightList[0]);
        rightList.shift();
      }
    }
    return leftList.concat(rightList);
  };

  const array = [4, 19, 7, 1, 9, 22, 6, 13];
  const sorted = mergeSort(array);
  console.log(sorted); // prints [ 1, 4, 6, 7, 9, 13, 19, 22 ]
  const numbers = [2, 14, 4, 3, 10, -4, -165];
  console.log("Result:", mergeSort(numbers));
}

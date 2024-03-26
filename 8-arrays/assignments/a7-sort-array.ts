{
    const sortNumberArray = (array: number[]) => {
        for (let i = 0; i < array.length; i++) {
            for (let j = i; j < array.length; j++) {
                if (array[j] < array[i]) {
                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
    }

    const array = [4, 19, 7, 1, 9, 22, 6, 13];
    sortNumberArray(array);
    console.log(array); // prints [ 1, 4, 6, 7, 9, 13, 19, 22 ]
}
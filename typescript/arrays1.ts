// Create an array for grades (1-5), some in string format,
// others in number format.
// Now, print only grades that are more than 3.
// Make sure your Array types are correct.

{
    const dirtyGrades: Array<number | string> =
        [1, 2, 3, 4, 5, "3", "4", "1", 2, "2"];

    // Function that returns an array of all grades strictly larger
    // than the cutoff value. 
    const getGrades = (grades: Array<number|string>, cutoff: number) => {
        return grades.filter(grade => Number(grade) > cutoff)
    }

    console.log(getGrades(dirtyGrades, 3));    
}
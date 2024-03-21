const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const daysInMonth = (monthNumber) => {
    switch (monthNumber) {
        case 1:
            return 31;
            break;
        case 2:
            return 28;
            break;
        case 3:
            return 31;
            break;
        case 4:
            return 30;
            break;
        case 5:
            return 31;
            break;
        case 6:
            return 30;
            break;
        case 7:
            return 31;
            break;
        case 8:
            return 31;
            break;
        case 9:
            return 30;
            break;
        case 10:
            return 31;
            break;
        case 11:
            return 30;
            break;
        case 12:
            return 31;
            break;
        default:
            console.log("Not a valid month date.");
            break;
    }
}

months.forEach(e => {
    console.log(`Month number ${e} has ${daysInMonth(e)} days in it.`);    
});
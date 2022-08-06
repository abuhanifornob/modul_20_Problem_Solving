function leapYear(year) {
    if (((year % 4 == 0) && (year % 100 != 0)) || year % 400 == 0) {
        return true;
    } else {
        return false;
    }
}

let year = 2024;
const isLeapYear = leapYear(year);
if (isLeapYear == true) {
    console.log(`${year} is leap Year.`)
} else {
    console.log(`${year} is Not Leap Year`)
}
function oddEven(number) {
    if (number == 0) {
        return number
    } else if (number % 2 !== 0) {
        return 'False';
    } else {
        return "True";
    }

}
let number = -11;
console.log(oddEven(number));
// function factorial(number) {
//     let fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     return fact;
// }

// let number = 5;
// const factorialNumberIS = factorial(number);
// console.log(factorialNumberIS)

// .......................Factorial number Dicrement operator Use...........................................

// function factorailD(number) {
//     let fact = 1;
//     for (let i = number; i >= 1; i--) {
//         fact *= i;
//     }
//     return fact;
// }
// let number = 5;
// const factorial = factorailD(number);
// console.log(factorial);



// .......................Factorial number while loop use...........................................

// function factorialUseWhileLoop(number) {
//     let i = 1;
//     let fact = 1;
//     while (i <= number) {
//         fact *= i;
//         i++;
//     }
//     return fact;
// }

// let number = 7;
// const factorial = factorialUseWhileLoop(number);
// console.log(factorial);


// .........Factorial number while loop use width Dicrement Operator...................

function factorialUseWhileLoopWithD(number) {
    let fact = 1;
    let i = number;
    while (i >= 1) {
        fact *= i;
        i--;
    }
    return fact;
}
let number = 5;
const factorial = factorialUseWhileLoopWithD(number);
console.log(factorial);
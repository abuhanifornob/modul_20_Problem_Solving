const array = [5, 7, 8, 10, 45, 30];

function add(arry) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

let sum = add(array);
console.log("The summition is: ", sum);

function findOddSum(array) {
    let oddArry = [];
    let evenArray = [];
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            oddSum += array[i];

            oddArry.push(array[i]);
        } else {
            evenSum += array[i];

            evenArray.push(array[i]);
        }


    }
    console.log('Even Numbers Sum is : ', evenSum);
    console.log('Odd Numbers Sum is : ', oddSum);
    console.log(`Toal Sumition is: ${ oddSum+evenSum }`);
    console.log(evenArray);
    console.log(oddArry);
}

findOddSum(array);
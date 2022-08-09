for (let i = 1; i <= 5; i++) {
    let result = " ";
    for (let j = 5; j >= i; j--) {
        result += j + " ";
    }
    console.log(result);
}
const frindList = ['hanif', 'hanif', 'kalam', 'kalam', 'taharat', 'abu'];

function removeDuplicateValue(names) {
    const unique = [];
    for (fname of frindList) {
        if (unique.includes(fname) != true) {
            unique.push(fname)
        }
    }
    return unique;
}

const uniqueF = removeDuplicateValue(frindList);
console.log(uniqueF);
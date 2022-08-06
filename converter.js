function incToFeet(inc) {
    let feet = inc / 12;
    return feet.toFixed(3);

}

function incToMetter(inc) {
    let metter = inc / 39.37;
    return metter.toFixed(3);
}

function mailToKm(mail) {
    let km = mail * 1.609;
    return km.toFixed(3)

}
let inc = 70;
const feet = incToFeet(inc);
const metter = incToMetter(inc);
console.log(`${inc} Inc is ${feet} Feet. `);
console.log(`${inc} Inc is ${metter} Metter. `);

let mail = 3;
const km = mailToKm(mail);
console.log(`${mail} Mail is ${km} KM. `);
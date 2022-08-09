const frinds = [10, 20, 10, 30, 40, 50];
const newFrinds = frinds.slice(1, 4);
console.log(newFrinds);
console.log(frinds);

const splicFrind = frinds.splice(1, 3, 100, 200, 300);
console.log(splicFrind);
console.log(frinds);
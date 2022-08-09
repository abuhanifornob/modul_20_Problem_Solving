function woodCalculation(tabel, chear, bed) {
    const perTabelWood = 10;
    const perChearWood = 3;
    const perBedWood = 50;
    const tabelWood = tabel * perTabelWood;
    const chearWood = chear * perChearWood;
    const bedWood = bed * perBedWood;
    const totalWood = tabelWood + chearWood + bedWood;
    return totalWood;

}

console.log("Total Wood: ", woodCalculation(0, 4, 0));
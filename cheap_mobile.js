const phones = [
    { name: 'Samsung', camera: "20MP", ram: "8GB", price: 40000, color: "Silver" },
    { name: 'Oppo', camera: "20MP", ram: "8GB", price: 27000, color: "Balck" },
    { name: 'Xaome', camera: "20MP", ram: "8GB", price: 30000, color: "Silver" },
    { name: 'Iphone', camera: "20MP", ram: "8GB", price: 82000, color: "Silver" },
    { name: 'Walton', camera: "20MP", ram: "8GB", price: 22000, color: "Silver" },
    { name: 'HTLC', camera: "20MP", ram: "8GB", price: 35000, color: "Silver" },
]
console.log(phones.length);

function cheapestPhone(phones) {
    let cheapPhone = phones[0];
    for (let i = 1; i < phones.length; i++) {
        if (cheapPhone.price > phones[i].price) {
            cheapPhone = phones[i]
        }
    }
    return cheapPhone;
}
console.log(cheapestPhone(phones));
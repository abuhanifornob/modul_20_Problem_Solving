const cart = [
    { name: 'shoew', price: 500, qty: 2 },
    { name: 'jaket', price: 2000, qty: 2 },
    { name: 'pant', price: 1000, qty: 3 },
    { name: 'shirt', price: 1200, qty: 4 },
    { name: 'belt', price: 1500, qty: 5 }
]

function priceCalculation(items) {
    let totalCost = 0;
    for (item in cart) {
        console.log(`Item Name is: ${items[item].name} And price :${items[item].price} Taka. Quantity: ${items[item].qty}`)
        totalCost += (items[item].price) * items[item].qty;
    }
    return totalCost;
}

const totalCost = priceCalculation(cart);
console.log(`Total Cost is :${totalCost} Taka.`);
// set prices
function setPrice(id, cost) {
    const elementCost = document.getElementById(id);
    elementCost.innerText = cost;
    totalCalculation();
}
// count total price
function totalCalculation() {

    // total price
    const totalPrice = document.getElementById('total-price');

    // memory
    const memoryCost = document.getElementById('memory-cost');
    const memoryCostNumber = parseInt(memoryCost.innerText);

    // storage
    const storageCost = document.getElementById('storage-cost');
    const storageCostNumber = parseInt(storageCost.innerText);

    // delivery
    const deliveryCost = document.getElementById('delivery-charge');
    const deliveryCostNumber = parseInt(deliveryCost.innerText);

    totalPrice.innerText = memoryCostNumber + storageCostNumber + deliveryCostNumber + 1299;

    // grand total
    const totalPrice2 = document.getElementById('grand-total');
    totalPrice2.innerText = totalPrice.innerText;

}

// memory event
document.getElementById('first-memory-option').addEventListener('click', function () {
    setPrice('memory-cost', 0)
})
document.getElementById('second-memory-option').addEventListener('click', function () {
    setPrice('memory-cost', 180);
})

// storage event
document.getElementById('first-storage-option').addEventListener('click', function () {
    setPrice('storage-cost', 0);
})
document.getElementById('second-storage-option').addEventListener('click', function () {
    setPrice('storage-cost', 100);
})
document.getElementById('third-storage-option').addEventListener('click', function () {
    setPrice('storage-cost', 180);
})

// delivery charge event
document.getElementById('first-delivery-charge').addEventListener('click', function () {
    setPrice('delivery-charge', 0);
})
document.getElementById('second-delivery-charge').addEventListener('click', function () {
    setPrice('delivery-charge', 20);
})

// promo code apply event
document.getElementById('promo-btn').addEventListener('click', function () {

    // promo code field
    const promoInput = document.getElementById('promo-confirm');

    // get total price
    const totalPrice = document.getElementById('total-price');
    let totalPriceNumber = parseFloat(totalPrice.innerText);

    // set grand total price
    const total = document.getElementById('grand-total');
    if (promoInput.value == 'stevekaku') {
        // 20% discount apply
        const newTotal = totalPriceNumber * 0.2;
        const newTotal2 = totalPriceNumber - newTotal;
        total.innerText = newTotal2;
        promoInput.value = '';
    } else {
        // wrong promo code apply
        alert("Wrong promo!!");
        total.innerText = totalPriceNumber;
        promoInput.value = '';
    }
})

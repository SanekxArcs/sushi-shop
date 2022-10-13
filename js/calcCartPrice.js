function calcCartPriceAndDelivery() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const priceEL =  cartWrapper.querySelectorAll('.price__currency');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');

    let priceTotal = 0;

    priceEL.forEach(function (item){

       const amountEL =  item.closest('.cart-item').querySelector('[data-counter]');

       priceTotal += parseInt(item.innerText) * parseInt(amountEL.innerText);
    });

    totalPriceEl.innerText = priceTotal;

    if (priceTotal > 0) {
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
    }


    if (priceTotal >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'Free';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '100 ₴';
    }
}
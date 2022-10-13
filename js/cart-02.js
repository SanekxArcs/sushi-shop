const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', function (event) {

    if (event.target.hasAttribute('data-cart')) {
        const card = event.target.closest('.card');

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        }

        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        if (itemInCart) {
            const counterEl = itemInCart.querySelector('[data-counter]');
            counterEl.innerText = parseInt(counterEl.innerText) + parseInt(productInfo.counter);
        } else {
        const cardItemHTML = `
            <div class="cart-item" data-id="${productInfo.id}">
    \t\t\t\t\t\t\t\t<div class="cart-item__top">
    \t\t\t\t\t\t\t\t\t<div class="cart-item__img">
    \t\t\t\t\t\t\t\t\t\t<img src="${productInfo.imgSrc}" alt="${productInfo.imgSrc}">
    \t\t\t\t\t\t\t\t\t</div>
    \t\t\t\t\t\t\t\t\t<div class="cart-item__desc">
    \t\t\t\t\t\t\t\t\t\t<div class="cart-item__title">${productInfo.title}</div>
    \t\t\t\t\t\t\t\t\t\t<div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>
    
    \t\t\t\t\t\t\t\t\t\t<!-- cart-item__details -->
    \t\t\t\t\t\t\t\t\t\t<div class="cart-item__details">
    
    \t\t\t\t\t\t\t\t\t\t\t<div class="items items--small counter-wrapper">
    \t\t\t\t\t\t\t\t\t\t\t\t<div class="items__control" data-action="minus">-</div>
    \t\t\t\t\t\t\t\t\t\t\t\t<div class="items__current" data-counter="">${productInfo.counter}</div>
    \t\t\t\t\t\t\t\t\t\t\t\t<div class="items__control" data-action="plus">+</div>
    \t\t\t\t\t\t\t\t\t\t\t</div>
    
    \t\t\t\t\t\t\t\t\t\t\t<div class="price">
    \t\t\t\t\t\t\t\t\t\t\t\t<div class="price__currency">${productInfo.price}</div>
    \t\t\t\t\t\t\t\t\t\t\t</div>
    
    \t\t\t\t\t\t\t\t\t\t</div>
    \t\t\t\t\t\t\t\t\t\t<!-- // cart-item__details -->
    
    \t\t\t\t\t\t\t\t\t</div>
    \t\t\t\t\t\t\t\t</div>
    \t\t\t\t\t\t\t</div>`;

            cartWrapper.insertAdjacentHTML('beforeend', cardItemHTML);

        }
        card.querySelector('[data-counter]').innerText = '1';

        //basket status empty/full
        toggleCartStatus();

        calcCartPriceAndDelivery();
    }
})

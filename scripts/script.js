let deliveryCost = 0; 

function init() {
    let  categoryCont = document.getElementById('category');
    let  foodCont =document.getElementById('food_display');

    foodCont.innerHTML= '';
    categoryCont.innerHTML = '' ;
         
    for (let i = 0; i < myDishes.length; i++) {
        categoryCont.innerHTML += showCategory(i); 
    }
   
    foodCont.innerHTML = fullView ();
}

function scrollToCategory(category) {
    let target = document.getElementById(category);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function addToCart(itemName, itemPrice) {
    let existingItem = cart.find(item => item.name === itemName);
    document.getElementById('delivery').addEventListener('change', deliveryCostSwitch);
    document.getElementById('pickup').addEventListener('change', deliveryCostSwitch);

    if (existingItem) {
        existingItem.quantity++;
    }else{
        cart.push({
            name: itemName,
            price: itemPrice,
            quantity: 1
        });
    }
    updateCartView(deliveryCost);
    updateCartMobileView();
}

function updateCartView(deliveryCost = 0) {
    let cartCont = document.getElementById('cart');
    let priceCont = document.getElementById('price');

    clearCartContainers (cartCont, priceCont);

    if (cart.length === 0) {
        return; 
    }
    
    renderCartContent(cartCont, priceCont, deliveryCost);
}

function clearCartContainers (cartCont, priceCont) {
    cartCont.innerHTML = ''; 
    priceCont.innerHTML = '' ;
}

function renderCartContent(cartCont, priceCont, deliveryCost) {
    let totalPrice = 0;

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        cartCont.innerHTML += renderCartItem(item);
    });
    totalPrice += deliveryCost;
    priceCont.innerHTML += renderCartTotal(totalPrice, deliveryCost);
}

function updateCartMobileView() {
    let basketMobileContent = document.getElementById('basket_mobile_content');
    basketMobileContent.innerHTML = ''; 

    if (cart.length === 0) {
        basketMobileContent.innerHTML = '<p>Your cart is empty!</p>';
        return;
    }
    renderBasketContent(basketMobileContent);
    addDeliverySwitchListeners();
}

function addDeliverySwitchListeners() {
    document.getElementById('mobile_delivery').addEventListener('change', deliveryCostSwitchMobile);
    document.getElementById('mobile_pickup').addEventListener('change', deliveryCostSwitchMobile);
}

function renderBasketContent(container){
    let totalPrice = 0;

    container.innerHTML += renderMobileBasket();
    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        container.innerHTML += renderCartItem(item); 
    });

    totalPrice += deliveryCost;
    container.innerHTML += renderCartTotal(totalPrice, deliveryCost);
}

function changeQuantity(itemName, change) {
    let item = cart.find(item =>item.name === itemName);
    
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(cartItem => cartItem.name !== itemName) ; 
        }
        updateCartView(deliveryCost);
        updateCartMobileView();
    }
}

function removeFromCart(itemName) {
    cart = cart.filter (item => item.name !== itemName); 
    let deliveryCost = cart.length > 0 ? 5 : 0; 
    updateCartView(deliveryCost);
    updateCartMobileView();
}

function deliveryCostSwitch() {
    let deliverOption = document.getElementById('delivery');
    
  
    if (deliverOption.checked) {
        deliveryCost = 5;
    } else {
        deliveryCost = 0; 
    }
    
    updateCartView(deliveryCost); 
}

function deliveryCostSwitchMobile(){
    let deliverOption = document.getElementById('mobile_delivery');

    if (deliverOption.checked) {
        deliveryCost = 5;
    } else {
        deliveryCost = 0; 
    }
    updateCartMobileView();
    updateCartView(deliveryCost);
}

function toggleBasketMobile(){
    let basketMobile = document.getElementById('basket_mobile');
    let basketMobileContent = document.getElementById('basket_mobile_content');

    if(basketMobile.style.display === 'none' || basketMobile.style.display === '' ){
        basketMobileContent.innerHTML = document.querySelector('.basket').innerHTML; 
        basketMobile.style.display = 'block' ;
        document.body.classList.add('no-scroll');
        updateCartMobileView();
    } else  {
        basketMobile.style.display = 'none';
        document.body.classList.remove('no-scroll'); 
    }
}

function confirmOrder(){
    cart = [] ; 
    deliveryCost = 0; 

    let cartCont = document.getElementById('cart');
    let priceCont = document.getElementById('price');
    let basketMobileContent = document.getElementById('basket_mobile_content');

    cartCont.innerHTML = '<p> Your order has been confirmed!</p>' ;
    priceCont.innerHTML = '';
    basketMobileContent.innerHTML = '<p> Your order has been confirmed!</p>' ;

}
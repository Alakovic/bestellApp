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
    let totalPrice = 0;

    cartCont.innerHTML = ''; 
    priceCont.innerHTML = '' ;

    if (cart.length === 0) {
        return; // If the bucket is empty, render nothing
    }

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        cartCont.innerHTML += renderCartItem(item);
    });
    totalPrice += deliveryCost;
    priceCont.innerHTML += renderCartTotal(totalPrice, deliveryCost);
}

function updateCartMobileView() {
    let basketMobileContent = document.getElementById('basket_mobile_content');
    let totalPrice = 0;

    basketMobileContent.innerHTML = ''; 

    if (cart.length === 0) {
        basketMobileContent.innerHTML = '<p>Your cart is empty!</p>';
        return;
    }

    basketMobileContent.innerHTML += renderMobileBasket();

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        basketMobileContent.innerHTML += renderCartItem(item); 
    });
    totalPrice += deliveryCost;
    basketMobileContent.innerHTML += renderCartTotal(totalPrice, deliveryCost); 

    document.getElementById('mobile_delivery').addEventListener('change', deliveryCostSwitchMobile);
    document.getElementById('mobile_pickup').addEventListener('change', deliveryCostSwitchMobile);
}

function changeQuantity(itemName, change) {
    let item = cart.find(item =>item.name === itemName);
    
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(cartItem => cartItem.name !== itemName) ; //Remove if quantity is 0 
            
        }
        updateCartView(deliveryCost);
        updateCartMobileView();
    }
}


function removeFromCart(itemName) {
    cart = cart.filter (item => item.name !== itemName); // Filter the items and keep only those that are not selected
    let deliveryCost = cart.length > 0 ? 5 : 0; // Example: €5 shipping only if there are items in the basket
    updateCartView(deliveryCost);
    updateCartMobileView();
}


let deliveryCost = 0; 

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
        basketMobileContent.innerHTML = document.querySelector('.basket').innerHTML; // Copy the contents of the shopping cart
        basketMobile.style.display = 'block' ;
        updateCartMobileView();
    } else  {
        basketMobile.style.display = 'none';
    }
}

function confirmOrder(){
    cart = [] ; // Empty basket
    deliveryCost = 0; //Reset delivery cost

    let cartCont = document.getElementById('cart');
    let priceCont = document.getElementById('price');
    let basketMobileContent = document.getElementById('basket_mobile_content');

    cartCont.innerHTML = '<p> Your order has been confirmed!</p>' ;
    priceCont.innerHTML = '';
    basketMobileContent.innerHTML = '<p> Your order has been confirmed!</p>' ;

}
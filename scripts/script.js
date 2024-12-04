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
}

function updateCartView(deliveryCost = 0) {
    let cartCont = document.getElementById('cart');
    let totalPrice = 0;

    cartCont.innerHTML = ''; 

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        cartCont.innerHTML += renderCartItem(item);
    });

    totalPrice += deliveryCost;
    cartCont.innerHTML += renderCartTotal(totalPrice, deliveryCost);
}


function changeQuantity(itemName, change) {
    let item = cart.find(item =>item.name === itemName);
    
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(cartItem => cartItem.name !== itemName) ; //Remove if quantity is 0 
            
        }
        updateCartView(deliveryCost);
    }
}


function removeFromCart(itemName) {
    cart = cart.filter (item => item.name !== itemName); // Filter the items and keep only those that are not selected
    updateCartView(deliveryCost);
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
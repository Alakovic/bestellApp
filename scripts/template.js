function showCategory(i) {
    return `<div class="category" id="category" onclick="scrollToCategory('${myDishes[i].category.toLowerCase()}')">
       <h3> ${myDishes[i].category} </h3>
    </div>`
}


function fullView (){
    let fullView = '';

    myDishes.forEach(category => {
        fullView +=  `<div class="food_category" id="${category.category.toLowerCase()}"><h3> ${category.category}</h3></div>`
        category.items.forEach(item => {
            fullView += `<div class="food_display" id="food_display">
           <h4> ${item.name} </h4>
           <p>${item.description}</p>
           <span>${item.price}€</span>
           <div class="plus_btn">
            <img src="./assets/icons/add_button.png" alt="plus" onclick="addToCart('${item.name}',${item.price})">
            </div>
           </div>`
            
        });
    });

    return fullView;
}

function renderCartItem(item) {
    return `<div class="cart_item">
                        <span class="item_name">${item.name}</span>
                <div class="cart_controls">
                    <img src="./assets/icons/minus.png" alt="minus" onclick="changeQuantity('${item.name}',-1)">
                         <span>${item.quantity}x</span>
                    <img src="./assets/icons/add_button.png" alt="plus" onclick="changeQuantity('${item.name}',1)">
                        <span>${(item.price * item.quantity).toFixed(2)}€</span>
                    <img src="./assets/icons/mull.png" alt="mull" onclick="removeFromCart('${item.name}')" class="delete_icon">
                </div> 
            </div>`;
}

function renderCartTotal(totalPrice, deliveryCost) {
    let sum = totalPrice - deliveryCost; 

    if (totalPrice === deliveryCost) {
        return ''; // If there are no items in the cart, display nothing
    }

    return `<hr>
             ${deliveryCost > 0 ?`<div class="cart_sum"><strong>Sum:</strong><span> ${sum.toFixed(2)}€</span></div>`: ''}
            </div>
            ${deliveryCost > 0 ? `<div class="delivery_cost"><strong>Delivery Cost:</strong><span> ${deliveryCost}€</span></div>` : ''}
            <div class="cart_total">
                <strong>Total: </strong> ${totalPrice.toFixed(2)}€
           </div>`;
}


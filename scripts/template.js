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
            <img src="./assets/icons/add_button.png" alt="plus">
            </div>
           </div>`
            
        });
    });

    return fullView;
}


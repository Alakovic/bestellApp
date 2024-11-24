function showCategory(i) {
    return `<div class="category" id="category">
       <h3> ${myDishes[i].category} </h3>
    </div>`
}

function showFood(name,description,price){
    return ` <div class="food_display" id="food_display">
        <h4>${name}</h4>
        <p>${description}</p>
        <span>${price}</span>
        <div class="plus_btn">
        <img src="../assets/icons/plus.png" alt="plus">
        </div>
    </div>`
    
}
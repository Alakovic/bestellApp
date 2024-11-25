function showCategory(i) {
    return `<div class="category" id="category">
       <h3> ${myDishes[i].category} </h3>
    </div>`
}


function fullView (){
    let fullView = '';

    myDishes.forEach(category => {
        fullView +=  `<div class="food_category" id="food_category"<h2> ${category.category}</h2></div>`
        category.items.forEach(item => {
            fullView += `<div class="food_display" id="food_display">
           <h4> ${item.name} </h4>
           <p>${item.description}</p>
           <span>${item.price}</span>
           <div class="plus_btn">
        <img src="../assets/icons/plus.png" alt="plus">
        </div>
           </div>`
            
        });
    });

    return fullView;
}


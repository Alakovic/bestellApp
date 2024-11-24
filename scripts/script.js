function init() {
    let  categoryCont = document.getElementById('category');
    let  foodCont =document.getElementById('food_display');

    foodCont.innerHTML= '';
    categoryCont.innerHTML = '' ;

    foodInfo();

    for (let i = 0; i < myDishes.length; i++) {
        categoryCont.innerHTML += showCategory(i); 
        for (let j = 0; j < foodNames[i].length; j++) {
            foodCont.innerHTML += showFood(foodNames[i][j], foodDescriptions[i][j], foodPrices[i][j]);
            
        }
    }
}

let foodNames = [];
let foodPrices = [];
let foodDescriptions = [];

function foodInfo(){
    for (let i = 0; i < myDishes.length; i++) {
        foodNames[i] = getFoodName(i);
        foodPrices[i] = getFoodPrice(i);
        foodDescriptions[i] = getFoodDescription(i);
    }
}


function getFoodName(i) {
    let food = [];

    myDishes[i].items.forEach((foodName) => {
     food.push(foodName.name);
    }); 
    
    return food;
}

function getFoodPrice(i) {
    let price = [];

    myDishes[i].items.forEach((foodPrice) => {
        price.push(foodPrice.price);
    });

    return price;
}

function getFoodDescription(i) {
    let description= [];

    myDishes[i].items.forEach((foodDesc) => {
        description.push(foodDesc.description);
    });

    return description;
}
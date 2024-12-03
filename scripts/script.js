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
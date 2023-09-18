"use strict"

let fatherDegrees = 0;
let itemsDegrees = 0;
let position = 0;
let lastItem = getMainItem();

let gallery = document.getElementById("circle_menu");
let rightButton = document.getElementById("right_button");
let leftButton = document.getElementById("left_button");
let items= document.getElementsByClassName("circle_item");
let price = document.getElementById("circular_price");
document.getElementById(getMainItem()).classList.add('mainCircle');
rightButton.addEventListener("click",function() {
    fatherDegrees+=90;
    itemsDegrees-=90;
    gallery.style.rotate = fatherDegrees+'deg';
    price.style.rotate=itemsDegrees+'deg';
    for (let index = 0; index < items.length; index++) {
        items[index].style.rotate = (itemsDegrees)+'deg';
    }
    position--;
    let mainItem=getMainItem();
    document.getElementById(mainItem).classList.add('mainCircle');
    document.getElementById(lastItem).classList.remove('mainCircle');
    lastItem=mainItem;
});
leftButton.addEventListener("click",function() {
    fatherDegrees-=90;
    itemsDegrees+=90;
    gallery.style.rotate = fatherDegrees+'deg';
    price.style.rotate=itemsDegrees+'deg';
    for (let index = 0; index < items.length; index++) {
        items[index].style.rotate = itemsDegrees+'deg';
    }
    position++;
    let mainItem=getMainItem();
    document.getElementById(mainItem).classList.add('mainCircle');
    document.getElementById(lastItem).classList.remove('mainCircle');
    lastItem=mainItem;
});
randomPrices();
function randomPrices() {
    let prices = document.getElementsByClassName("circular_price");
    console.log(prices);
    for (let index = 0; index < items.length; index++) {
        prices[index].innerHTML = '$'+Math.floor(Math.random() * (1500 - 300 + 1) + 300);
    }
}

function getMainItem() {
    if(position > 3 || position < -3) {
        position = 0;
    }
    switch (position) {
        case 0:
            return 'item1';
            break;
        case 1:
            return 'item2';
            break;
        case 2:
            return 'item3';
            break;
        case 3:
            return 'item4';
            break;
        case -1:
            return 'item4';
            break;
        case -2:
            return 'item3';
            break;
        case -3:
            return 'item2';
            break;
        default:
            break;
    }
}
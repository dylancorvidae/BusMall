import DisplayList from './display-list.js';
import productsList from './data/products.js';


const leftButton = document.getElementById('left-button');
const centerButton = document.getElementById('center-button');
const rightButton = document.getElementById('right-button');
const leftImg = document.getElementById('left-img');
const centerImg = document.getElementById('center-img');
const rightImg = document.getElementById('right-img');


let displayList = new DisplayList(productsList);
let productSelected = [];
let productDisplayed = [];
let round = 0;


//take productSelection1 put into my buttons

const productSelection1 = displayList.getThreeRandomProducts();

//button left
const item1 = productSelection1[0];
leftButton.value = item1.id;
leftImg.src = item1.image;
leftImg.alt = item1.name;
//button center
const item2 = productSelection1[1];
centerButton.value = item2.id;
centerImg.src = item2.image;
centerImg.alt = item2.name;
//button right
const item3 = productSelection1[2];
rightButton.value = item3.id;
rightImg.src = item3.image;
rightImg.alt = item3.name;


//User choice selection and Tally
leftButton.addEventListener('click', () => {
    const idSelected = event.currentTarget.value;
    
})

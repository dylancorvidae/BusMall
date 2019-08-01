import DisplayList from './display-list.js';
import productsList from './data/products.js';
import { findById } from './utility.js';
import store from './data/store.js';


const leftButton = document.getElementById('left-button');
const centerButton = document.getElementById('center-button');
const rightButton = document.getElementById('right-button');
const leftImg = document.getElementById('left-img');
const centerImg = document.getElementById('center-img');
const rightImg = document.getElementById('right-img');
const productButtons = document.getElementById('product-buttons');


let displayList = new DisplayList(productsList);
let round = 0;


//take productSelection1 put into my buttons

const productSelection1 = displayList.getThreeRandomProducts();

//

//button left
const item1 = productSelection1[0];
leftButton.value = item1.name;
leftImg.src = item1.image;
leftImg.alt = item1.id;
//button center
const item2 = productSelection1[1];
centerButton.value = item2.name;
centerImg.src = item2.image;
centerImg.alt = item2.id;
//button right
const item3 = productSelection1[2];
rightButton.value = item3.name;
rightImg.src = item3.image;
rightImg.alt = item3.id;



//Tally productSelection1 in productsDisplayed[]
const localProductsList = store.getProducts();
console.log(localProductsList);
//find 1 idDisplayed in localProductList 
const product1Displayed = productSelection1[0];
const product2Displayed = productSelection1[1];
const product3Displayed = productSelection1[2];

//loop through adding one to displayed


//save to local storage


//User choice selection and Tally to productSelected[]
productButtons.addEventListener('click', (event) => {
    event.preventDefault();
    const idSelected = event.target.alt;
    //get array from local storage 
    const localProductsList = store.getProducts();

    //find idSelected in localProductsList findById
    const productSelected = findById(localProductsList, idSelected);
    console.log(productSelected);
    
    //tally selected value for idSelected
    productSelected.selected++;
    
    console.log(productSelected);
    //save new shoppingCart to localstorage
    store.save('products', localProductsList);
});




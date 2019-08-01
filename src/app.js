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
//let round = 0;


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

//find 1 idDisplayed in localProductList 
// let product1Displayed = findById(localProductsList, productSelection1[0]);
// let product2Displayed = findById(localProductsList, productSelection1[1]);
// let product3Displayed = findById(localProductsList, productSelection1[2]);
//console.log(product1Displayed, product2Displayed, product3Displayed);
//loop through adding one to displayed
// product1Displayed++;
// product2Displayed++;
// product3Displayed++;
////console.log(product1Displayed, product2Displayed, product3Displayed);
//save to local storage
store.save('products', localProductsList);

//User choice selection and Tally to productSelected[]
productButtons.addEventListener('click', (event) => {
    event.preventDefault();
    const idSelected = event.target.alt;
    //get array from local storage 
    const localProductsList = store.getProducts();

    //find idSelected in localProductsList findById
    const productSelected = findById(localProductsList, idSelected);
    
    //tally selected value for idSelected
    productSelected.selected++;
    
    //save new shoppingCart to localstorage
    store.save('products', localProductsList);
});




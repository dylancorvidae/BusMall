import productsList from '../src/data/products.js';
import DisplayList from '../src/display-list.js';

const test = QUnit.test;

QUnit.module('Display Product List');

test('copy productsList/bootstrap productsList', assert => {
    const displayList = new DisplayList(productsList);

    assert.deepEqual(displayList.list, productsList);
    assert.notEqual(displayList.list, productsList);
});

test('get random product', assert => {
    const displayList = new DisplayList(productsList);

    const product = displayList.getRandomProduct();

    assert.ok(productsList.includes(product));
});

test('remove a product from the list', assert => {
    const displayList = new DisplayList(productsList);
    const removeProduct = productsList[1];

    displayList.removeById(removeProduct.id);

    assert.notOk(displayList.list.includes(removeProduct));
});
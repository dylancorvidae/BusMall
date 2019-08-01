import store from '../src/data/store.js';
import productsList from '../src/data/products.js';

const test = QUnit.test;

QUnit.testStart(() => {
    store.storage.clear();
});

test('get and save', assert => {
    const product = { id: 'usb-octopus' };
    const key = product;

    store.save(key, product);
    const got = store.get(key);

    assert.deepEqual(got, product);
});

test('bootstrap products list', assert => {
    const products = store.getProducts();

    assert.deepEqual(products, productsList);
});
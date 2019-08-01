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


test('grab from purgatory when empty', assert => {
    const purgatory = store.getPurgatory();
    const emptyArray = [];

    assert.deepEqual(purgatory, emptyArray);
});

test('grab from purgatory when filled', assert => {
    store.save('purgatory', [1, 2, 3]);
    const purgatory = store.getPurgatory();
    const filledArray = [1, 2, 3];

    assert.deepEqual(purgatory, filledArray);
    store.save('purgatory', []);
});
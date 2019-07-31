import store from '../src/data/store.js';
import productsList from '../src/data/products.js';

const test = Qunit.test;

QUnit.testStart(() => {
    store.storage.clear();
});

test('basic get and save')
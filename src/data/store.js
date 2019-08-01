import productsList from './products.js';

const store = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    
    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    
    getProducts() {
        let products = store.get('products');
        if(!products) {
            products = productsList;
            store.save('products', productsList);
        }
        return products;
    }
};

export default store;
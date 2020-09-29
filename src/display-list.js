import { getRandomInt } from './utility.js';
import store from './data/store.js';

class DisplayList {
    constructor(products) {
        this.list = products.slice();
    }

    getRandomProduct() {
        const index = getRandomInt (this.list.length);
        const product = this.list[index];
        return product;
    }

    removeById(productId) {
        const list = this.list;
        for(let i = 0; i < list.length; i++) {
            const product = list[i];
            if(product.id === productId) {
                list.splice(i, 1);
                return;
            }
        }
    }

    getThreeRandomProducts() {
        const productSelection1 = [];
        for(let i = 0; i < 3; i++){
            const randomProduct = this.getRandomProduct();
            productSelection1.push(randomProduct);
            this.removeById(randomProduct.id);
        }
        //grab purgatory
        const productPurgatory = store.getPurgatory();
        //add purgatory into this.list (Master List)
        for(let i = 0; i < productPurgatory.length; i++){
            const item = productPurgatory[i];
            this.list.push(item);
        } //save new 3 into purgatory
        store.save('purgatory', productSelection1);

        return productSelection1;
    }
}

export default DisplayList;
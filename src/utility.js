

//taken from Marty's Tree App util.js which is based on // based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
export function getRandomInt(length) {
    return Math.floor(Math.random() * length);
}

export function findById(items, id) {
    for(let i = 0; i < items.length; i++) {
        const item = items[i];
        if(item.id === id) {
            return item;
        }
    }
}
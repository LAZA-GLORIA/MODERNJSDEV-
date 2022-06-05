import { addToCart, totalPrice as tp, tq } from "./shoppingCart.js";

console.log('importing module');
addToCart('breds', 4);

console.log(tp, tq);

//Une fonction asynchrone renvoie une promesse

const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);
    console.log(data.at(-1).title);
    console.log(data.at(-1).id);
    console.log(data[0].title);
    return { title: data.at(-1).title,
            text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

//IIFE (Immediately Invoked Function Expression) (Expression de fonction invoquée immédiatement)
//ne sera exécutée qu'une seule fois et enverra des données qu'une seule fois
const shoppingCart2 = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 250;
    const totalQuantity = 13;

    const addToCart = function(product, quantity) {
        cart.push({product, quantity});
        console.log(`${quantity} ${product} added to cart`);
    };

    const orderStock = function(product, quantity) {
        console.log(`${quantity} ${product} order from supplier`);
    };

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity
    }

})();

shoppingCart2.addToCart('apples', 4);
shoppingCart2.addToCart('pizza', 1);

//COMMONJS export
//export.addToCart = function(product, quantity) {
  //  cart.push({product, quantity});
 //   console.log(`${quantity} ${product} added to cart shipping cost is ${shippingCost}`);
//};
//import
//const { addToCart } = require('./shoppingCart.js');

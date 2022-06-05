console.log("exporting module");

const shippingCost= 10;
const cart = [];

export const addToCart = function(product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart shipping cost is ${shippingCost}`);
}

const totalPrice = 20;
const totalQuantity = 4;

export { totalPrice, totalQuantity as tq};


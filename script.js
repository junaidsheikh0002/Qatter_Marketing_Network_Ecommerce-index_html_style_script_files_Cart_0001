// script.js
const cart = [];

function addToCart(productName, productPrice) {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Add product to cart array
    cart.push({ name: productName, price: productPrice });

    // Update cart items list
    const li = document.createElement('li');
    li.textContent = `${productName} - $${productPrice.toFixed(2)}`;
    cartItems.appendChild(li);

    // Update total price
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = total.toFixed(2);
}

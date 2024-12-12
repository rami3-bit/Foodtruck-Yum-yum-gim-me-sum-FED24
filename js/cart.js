const cart = [];

export function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    updateCartDisplay();
}

export function updateCartDisplay() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name} (${item.quantity})</span>
            <span>${item.price * item.quantity} SEK</span>
            <button data-id="${item.id}" class="remove">Ta bort</button>
        </div>
    `).join('');
    document.getElementById('total-price').textContent = 
        `${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)} SEK`;
}

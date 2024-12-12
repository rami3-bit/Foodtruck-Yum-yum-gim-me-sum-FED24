import { fetchAPI } from './api.js';
import { cart } from './cart.js';

export async function placeOrder() {
    const orderResponse = await fetchAPI('/orders', {
        method: 'POST',
        body: JSON.stringify({ items: cart })
    });
    document.getElementById('order-id').textContent = `Beställnings-ID: ${orderResponse.id}`;
}

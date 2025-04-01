document.addEventListener('DOMContentLoaded', function() {

    const products = document.querySelectorAll('.product');
    const cartList = document.querySelector('.cart-list');
    const totalElement = document.querySelector('.total span');
    const clearCartButton = document.querySelector('.clear-cart');
    const buyCartButton = document.querySelector('.buy-cart');

    let cart = [];

    loadCartFromLocalStorage();

    products.forEach(product => {
        const addToCartButton = product.querySelector('.add-to-cart');
        addToCartButton.addEventListener('click', () => addToCart(product));
    });

    clearCartButton.addEventListener('click', clearCart);

    function addToCart(product) {
        const productId = product.dataset.id;
        const productName = product.dataset.name;
        const productPrice = parseFloat(product.querySelector('.price').textContent.replace('$', ''));

        const existingProduct = cart.find(item => item.id === productId);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
        }

        updateCartUI();
        saveCartToLocalStorage();
    }

    function updateCartUI() {
        cartList.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
            cartList.appendChild(listItem);
            total += item.price * item.quantity;
        });

        totalElement.textContent = `${total.toFixed(2)}`;

        const removeButtons = document.querySelectorAll('.remove-item');
        removeButtons.forEach(button => {
            button.addEventListener('click', () => removeItem(button.dataset.id));
        });
    }

    function clearCart() {
        cart = [];
        updateCartUI();
        saveCartToLocalStorage();
    }

    function removeItem(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCartUI();
        saveCartToLocalStorage();
    }

    function saveCartToLocalStorage() {
        localStorage.setItem('carrito', JSON.stringify(cart));
    }

    function loadCartFromLocalStorage() {
        const storedCart = localStorage.getItem('carrito');
        if (storedCart) {
            cart = JSON.parse(storedCart);
            updateCartUI();
        }
    }
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_0ao880e';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar correo electrónico';
      alert('¡Correo enviado exitosamente!');
    }, (err) => {
      btn.value = 'Enviar correo electrónico';
      alert(JSON.stringify(err));
    });
});

});

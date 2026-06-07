const cartContainer = document.getElementById("cartContainer");
const cartTotal = document.getElementById("cartTotal");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {

    if (cart.length === 0) {

        cartContainer.innerHTML = `
            <h2>Your Cart Is Empty</h2>
        `;

        cartTotal.innerHTML = "";

        return;
    }

    cartContainer.innerHTML = cart.map((item, index) => `

        <div class="cart-item">

            <img src="${item.image}" alt="${item.name}">

            <div>

                <h2>${item.name}</h2>

                <p>₹${item.price}</p>

                <button onclick="removeItem(${index})">
                    Remove
                </button>

            </div>

        </div>

    `).join("");

    const total = cart.reduce(
        (sum, item) => sum + item.price,
        0
    );

    cartTotal.innerHTML = `
    
        <h2>Total: ₹${total}</h2>

        <button 
            class="checkout-btn"
            onclick="goToCheckout()"
        >
            Proceed To Checkout
        </button>
    
    `;
}

function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}
function goToCheckout(){

    window.location.href =
    "checkout.html";

}

displayCart();

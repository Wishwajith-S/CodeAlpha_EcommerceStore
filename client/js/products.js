const productsContainer =
document.getElementById("productsContainer");

const userInfo =
document.getElementById("userInfo");

const searchInput =
document.getElementById("searchInput");


// DISPLAY PRODUCTS

function displayProducts(products){

    productsContainer.innerHTML = products.map(product => `
        
        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <h2>${product.name}</h2>

            <p>${product.description}</p>

            <h3>₹${product.price}</h3>

            <div class="product-buttons">

                <button onclick="viewProduct(${product.id})">
                    View Details
                </button>

                <button onclick="addToCart(${product.id})">
                    Add To Cart
                </button>

            </div>

        </div>

    `).join("");

}


// LOAD PRODUCTS

async function loadProducts() {

    try {

        const response = await fetch(
            "https://shopeasy-backend-5km3.onrender.com/api/products"
        );

        const products = await response.json();

        // STORE PRODUCTS GLOBALLY

        window.allProducts = products;

        // DISPLAY PRODUCTS

        displayProducts(products);

    } catch (error) {

        console.log(error);

    }
}


// ADD TO CART

function addToCart(id) {

    const product = window.allProducts.find(
        item => item.id === id
    );

    let cart = JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    cart.push(product);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert("Product Added To Cart");
}


// VIEW PRODUCT DETAILS

function viewProduct(id){

    window.location.href =
    `product-details.html?id=${id}`;

}


// CHECK LOGGED-IN USER

function checkUser(){

    const user =
    JSON.parse(localStorage.getItem("user"));

    if(user){

        userInfo.innerHTML = `

            <span style="color:white;">
                Hello, ${user.name}
            </span>

            <a href="#" onclick="logout()">
                Logout
            </a>

        `;

    }

}


// LOGOUT

function logout(){

    localStorage.removeItem("user");

    alert("Logged out successfully");

    window.location.href = "login.html";

}


// SEARCH PRODUCTS

searchInput.addEventListener(
    "input",
    function(){

        const searchText =
        searchInput.value.toLowerCase();

        const filteredProducts =
        window.allProducts.filter(product =>

            product.name
                .toLowerCase()
                .includes(searchText)

        );

        displayProducts(filteredProducts);

    }
);


// INITIAL FUNCTIONS
// FILTER PRODUCTS

function filterProducts(category){

    if(category === "all"){

        displayProducts(window.allProducts);

        return;
    }

    const filteredProducts =
    window.allProducts.filter(product =>

        product.category === category

    );

    displayProducts(filteredProducts);

}
checkUser();

loadProducts();
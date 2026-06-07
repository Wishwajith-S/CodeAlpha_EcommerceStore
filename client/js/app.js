const productDetails =
document.getElementById("productDetails");

// GET URL PARAMETERS

const params =
new URLSearchParams(window.location.search);

// GET PRODUCT ID FROM URL

const productId = params.get("id");

// LOAD PRODUCT

async function loadProduct(){

    try{

        const response = await fetch(
            `http://localhost:5000/api/products/${productId}`
        );

        const product = await response.json();

        productDetails.innerHTML = `

            <div class="details-card">

                <img src="${product.image}" alt="${product.name}">

                <div class="details-content">

                    <h1>${product.name}</h1>

                    <p>${product.description}</p>

                    <h2>₹${product.price}</h2>

                    <button onclick="addToCart()">
                        Add To Cart
                    </button>

                </div>

            </div>

        `;

        // STORE CURRENT PRODUCT

        window.currentProduct = product;

    }catch(error){

        console.log(error);

    }
}

// ADD TO CART

function addToCart(){

    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(window.currentProduct);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert("Product Added To Cart");
}

// CALL FUNCTION

loadProduct();
const ordersContainer =
document.getElementById("ordersContainer");

// GET ORDERS

const orders =
JSON.parse(localStorage.getItem("orders")) || [];

// CHECK EMPTY

if(orders.length === 0){

    ordersContainer.innerHTML = `
    
        <h2 style="text-align:center;">
            No Orders Found
        </h2>
    
    `;

}else{

    // DISPLAY ORDERS

    ordersContainer.innerHTML = orders.map(order => `

        <div class="order-card">

            <h2>Order Details</h2>

            <p>
                <strong>Address:</strong>
                ${order.address}
            </p>

            <p>
                <strong>Phone:</strong>
                ${order.phone}
            </p>

            <p>
                <strong>Order Date:</strong>
                ${new Date(order.orderDate)
                    .toLocaleString()}
            </p>

            <h3>Products:</h3>

            <div class="order-products">

                ${order.items.map(item => `

                    <div class="order-item">

                        <img 
                            src="${item.image}"
                            alt="${item.name}"
                        >

                        <div>

                            <h4>${item.name}</h4>

                            <p>₹${item.price}</p>

                        </div>

                    </div>

                `).join("")}

            </div>

        </div>

    `).join("");

}
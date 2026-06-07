const checkoutForm =
document.getElementById("checkoutForm");

checkoutForm.addEventListener(
    "submit",
    function(e){

        e.preventDefault();

        // GET INPUT VALUES

        const address =
        document.getElementById("address").value;

        const phone =
        document.getElementById("phone").value;

        // GET CART

        const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

        // CHECK EMPTY CART

        if(cart.length === 0){

            alert("Your cart is empty");

            return;
        }

        // CREATE ORDER OBJECT

        const order = {
            address,
            phone,
            items: cart,
            orderDate: new Date()
        };

        // STORE ORDERS

        let orders =
        JSON.parse(localStorage.getItem("orders")) || [];

        orders.push(order);

        localStorage.setItem(
            "orders",
            JSON.stringify(orders)
        );

        // CLEAR CART

        localStorage.removeItem("cart");

        // SUCCESS MESSAGE

        alert("Order Placed Successfully");

        // REDIRECT

        window.location.href =
        "products.html";

    }
);
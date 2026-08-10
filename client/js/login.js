const loginForm =
document.getElementById("loginForm");

loginForm.addEventListener(
    "submit",
    async function(e){

        e.preventDefault();

        // GET INPUT VALUES

        const email =
        document.getElementById("email").value;

        const password =
        document.getElementById("password").value;

        try{

            // SEND LOGIN REQUEST

            const response = await fetch(
                "https://shopeasy-backend-5km3.onrender.com/api/products",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            alert(data.message);

            // LOGIN SUCCESS

            if(response.ok){

                // STORE USER

                localStorage.setItem(
                    "user",
                    JSON.stringify(data.user)
                );

                // REDIRECT

                window.location.href =
                "products.html";

            }

        }catch(error){

            console.log(error);

        }

    }
);
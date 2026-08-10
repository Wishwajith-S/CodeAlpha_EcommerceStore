const registerForm =
document.getElementById("registerForm");

registerForm.addEventListener(
    "submit",
    async function(e){

        e.preventDefault();

        // GET INPUT VALUES

        const name =
        document.getElementById("name").value;

        const email =
        document.getElementById("email").value;

        const password =
        document.getElementById("password").value;

        try{

            // SEND DATA TO BACKEND

            const response = await fetch(
                "https://shopeasy-backend-5km3.onrender.com/api/products",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        name,
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            alert(data.message);

            // REDIRECT TO LOGIN PAGE

            if(response.ok){

                window.location.href =
                "login.html";

            }

        }catch(error){

            console.log(error);

        }

    }
);
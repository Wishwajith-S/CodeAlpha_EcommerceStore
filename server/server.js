const express = require("express");

const cors = require("cors");

const path = require("path");

const app = express();

const PORT = process.env.PORT || 5000;


// IMPORT ROUTES

const productRoutes =
require("./routes/productRoutes");

const authRoutes =
require("./routes/authRoutes");


// MIDDLEWARE

app.use(cors());

app.use(express.json());


// SERVE FRONTEND FILES

app.use(
    express.static(
        path.join(__dirname, "../client")
    )
);


// API ROUTES

app.use(
    "/api/products",
    productRoutes
);

app.use(
    "/api/auth",
    authRoutes
);


// DEFAULT ROUTE

app.get("/", (req, res) => {

    res.sendFile(
        path.join(__dirname, "../client/index.html")
    );

});


// START SERVER

app.listen(PORT, () => {

    console.log(
        `Server running on port ${PORT}`
    );

});
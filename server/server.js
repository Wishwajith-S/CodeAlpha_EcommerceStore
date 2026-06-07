const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());



// IMPORT ROUTES
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
// USE ROUTES
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
    res.send("E-Commerce Backend Running...");
});

// PORT
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
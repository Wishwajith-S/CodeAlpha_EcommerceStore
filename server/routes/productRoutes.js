const express = require("express");
const router = express.Router();

const products = require("../data/products");

// GET ALL PRODUCTS
router.get("/", (req, res) => {
    res.json(products);
});

// GET SINGLE PRODUCT
router.get("/:id", (req, res) => {

    const product = products.find(
        (p) => p.id === parseInt(req.params.id)
    );

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({
            message: "Product not found"
        });
    }
});

module.exports = router;
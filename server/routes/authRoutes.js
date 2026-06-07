const express = require("express");

const router = express.Router();

const users = require("../data/users");


// REGISTER USER

router.post("/register", (req, res) => {

    const { name, email, password } = req.body;

    // CHECK IF USER EXISTS

    const userExists = users.find(
        user => user.email === email
    );

    if(userExists){

        return res.status(400).json({
            message: "User already exists"
        });
    }

    // CREATE USER

    const newUser = {
        id: Date.now(),
        name,
        email,
        password
    };

    users.push(newUser);

    res.status(201).json({
        message: "Registration successful",
        user: newUser
    });

});


// LOGIN USER

router.post("/login", (req, res) => {

    const { email, password } = req.body;

    // FIND USER

    const user = users.find(
        user =>
            user.email === email &&
            user.password === password
    );

    if(user){

        res.json({
            message: "Login successful",
            user
        });

    }else{

        res.status(401).json({
            message: "Invalid email or password"
        });

    }

});

module.exports = router;
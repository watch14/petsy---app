const express = require("express");
const User = require("../models/user.models.js");
const router = express.Router();
const {getUsers, getUser, addUser, updateUser, deleteUser} = require("../controller/user.controller.js");


// add a new user to the database
router.post("/", addUser);

// get all users
router.get("/", getUsers);

// get user by id
router.get("/:id", getUser);

// update user by id
router.put("/:id", updateUser);

// delete user by id
router.delete("/:id", deleteUser);


module.exports = router;



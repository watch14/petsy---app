import express from "express";
import {addUser, getUsers, getUser, updateUser, deleteUser} from "../controller/user.controller.js";

const router = express.Router();


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


export default router;



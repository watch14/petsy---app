import express from "express";
import {getPets, getPet, addPet, updatePet, deletePet} from "../controller/pet.controller.js";

const router = express.Router();


// add a new pet to the database
router.post("/", addPet);

// get all pets
router.get("/", getPets);

// get pet by id
router.get("/:id", getPet);

// update pet by id
router.put("/:id", updatePet);

// delete pet by id
router.delete("/:id", deletePet);



export default router;
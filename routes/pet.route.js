const express = require("express");
const Pet = require("../models/pet.models.js");
const router = express.Router();
const {getPets, getPet, addPet, updatePet, deletePet} = require("../controller/pet.controller.js");




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



module.exports = router;

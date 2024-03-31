const Pet = require("../models/pet.models");

//add a new pet to the database
const addPet = async (req, res) => {
  try {
    const pet = await Pet.create(req.body);
    res.status(200).json(pet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//find
const getPets = async (req, res) => {
  try {
    const pets = await Pet.find({});
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//find pet by id
const getPet = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await Pet.findById(id);
    res.status(200).json(pet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update pet by id
const updatePet = async (req, res) => {
  try {
    const { id } = req.params;

    const pet = await Pet.findByIdAndUpdate(id, req.body);
    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }

    const updatedPet = await Pet.findById(id);
    res.status(200).json(updatedPet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete pet by id
const deletePet = async (req, res) => {
  try {
    const { id } = req.params;

    const pet = await Pet.findByIdAndDelete(id);
    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }

    res.status(200).json({ message: "Pet deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addPet,
  getPets,
  getPet,
  updatePet,
  deletePet,
};


// /////////////////////////PET ROUTES/////////////////////////
// /////////////////////////PET ROUTES/////////////////////////

// ///////add a new pet to the database
// app.post("/api/pets", async (req, res) => {
//     try {
//       const pet = await Pet.create(req.body);
//       res.status(200).json(pet);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });

//   ///////view all pets in the database
//   app.get("/api/pets", async (req, res) => {
//     try {
//       const pets = await Pet.find({});
//       res.status(200).json(pets);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });

//   ///////get pet by id
//   app.get("/api/pets/:id", async (req, res) => {
//     try {
//       const { id } = req.params;
//       const pet = await Pet.findById(id);
//       res.status(200).json(pet);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });

//   ///////update pet by id
//   app.put("/api/pets/:id", async (req, res) => {
//     try {
//       const { id } = req.params;

//       const pet = await Pet.findByIdAndUpdate(id, req.body);
//       if (!pet) {
//         return res.status(404).json({ message: "Pet not found" });
//       }

//       const updatedPet = await Pet.findById(id);
//       res.status(200).json(updatedPet);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });

//   ///////delete pet by id
//   app.delete("/api/pets/:id", async (req, res) => {
//     try {
//       const { id } = req.params;

//       const pet = await Pet.findByIdAndDelete(id);
//       if (!pet) {
//         return res.status(404).json({ message: "Pet not found" });
//       }

//       res.status(200).json({ message: "Pet deleted successfully" });
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });

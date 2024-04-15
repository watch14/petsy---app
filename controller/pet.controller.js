import Pet from "../models/pet.models.js";
import User from "../models/user.models.js";


//add a new pet to the database
const addPet = async (req, res) => {
  try {
    const pet = await Pet.create(req.body);
    const user = await User.findOne({ _id: req.body.ownerId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

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


//find pets by filter
const findPetByFilter = async (req, res) => {
  try {
    // Extract filter parameters from request query
    const { petType, breed, gender, size, location } = req.query;

    // Construct query object based on provided filters
    const query = {};
    if (petType) query.petType = petType;
    if (breed) query.breed = breed;
    if (gender) query.gender = gender;
    if (size) query.size = size;
    if (location) query.location = location;

    // Find pets that match the provided filters
    const pets = await Pet.find(query);

    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { addPet, getPets, getPet, updatePet, deletePet, findPetByFilter};


const User = require("../models/user.models.js");

//add a new user to the database
const addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get user by id
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update user by id
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(id, req.body);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete user by id
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};


// /////////////////////////USER ROUTES/////////////////////////
// /////////////////////////USER ROUTES/////////////////////////

// ///////add a new user to the database
// app.post("/api/user", async (req, res) => {
//   try {
//     const user = await User.create(req.body);
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// ///////view all users in the database
// app.get("/api/users", async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// ///////get user by id
// app.get("/api/user/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user = await User.findById(id);
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// ///////update user by id
// app.put("/api/user/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const user = await User.findByIdAndUpdate(id, req.body);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const updatedUser = await User.findById(id);
//     res.status(200).json(updatedUser);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// ///////delete user by id
// app.delete("/api/user/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const user = await User.findByIdAndDelete(id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({ message: "User deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

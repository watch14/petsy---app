const mongoose = require("mongoose");

const Pet = require("./models/pet.models.js"); // pet model
const User = require("./models/user.models.js"); // user model
const petRoute = require("./routes/pet.route.js");
const userRoute = require("./routes/user.route.js");

const express = require("express");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



/////////////////////////ROUTES/////////////////////////

app.use("/api/pets", petRoute);
app.use("/api/users", userRoute);


app.get("/", (req, res) => {
  res.send("Supp CUH!!");
});













/////////////////////////LISTENING/////////////////////////
/////////////////////////LISTENING/////////////////////////
mongoose
  .connect(
    "mongodb+srv://admin:u8gl7lwPvWoQ6m6W@backend-db.zf15ylv.mongodb.net/Pets?retryWrites=true&w=majority&appName=Backend-DB"
  )
  .then(() => {
    console.log("Connected to MongoDB!");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed!");
  });

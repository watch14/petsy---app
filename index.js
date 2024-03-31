import mongoose from "mongoose";
import express from "express";
import petRoute from "./routes/pet.route.js";
import userRoute from "./routes/user.route.js";



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

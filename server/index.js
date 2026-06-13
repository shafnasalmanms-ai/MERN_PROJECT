const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/studentdb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// ROUTES (ADD THIS)
const studentRoutes = require("./routes/studentRoutes");
app.use("/students", studentRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

//importing Routes
const authRoutes = require("./routes/auth/auth");

const port = process.env.PORT || 9000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected Successfully..");
  });

//routes middlware
app.use("/api/auth", authRoutes); //auth service Interface

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {useUnifiedTopology:true}).then(() => {
    console.log("Database connected successfully")
});

app.listen(port, function() {
    console.log(`Server started on port ${port}`);
});
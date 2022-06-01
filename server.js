const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

//importing Supervisor route
const supervisorRoutes = require("./routes/supervisors/supervisorRoutes");
//importing Document Evaluatioin route
const docEvaluationRoutes = require("./routes/supervisors/docEvaluateRoutes");


const port = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})
    .then(() => {
    console.log("Database connected successfully")
});

//routes middleware
app.use("/api/supervisors", supervisorRoutes);
app.use("/api/docEvaluation", docEvaluationRoutes);

app.listen(port, function() {
    console.log(`Server started on port ${port}`);
});
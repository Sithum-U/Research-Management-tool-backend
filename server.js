const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const CreateGroup = require("./routes/student/createGroupRout");
const Findtopic = require("./routes/student/findTopicRoute");
const Docsubmit = require("./routes/student/docSubmitRoute");

require("dotenv").config();
const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL, {useUnifiedTopology:true}).then(() => {
    console.log("Database connected successfully")
});
app.use("/creategroup",CreateGroup) 
app.use("/findtopic",Findtopic)
app.use("/docsubmit",Docsubmit)

app.listen(port, function() {
    console.log(`Server started on port ${port}`);
});
const express = require("express");
const mongoose = require("mongoose");
const panelMemberRoutes = require("./routes/panel_member/panelMemberRoute");
const presentationRoutes = require("./routes/panel_member/presentationRoute");
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {useUnifiedTopology:true,
    useNewUrlParser:true,
}).then(() => {
    console.log("Database connected successfully")
});

app.use('/panelMember',panelMemberRoutes);
app.use('/presentation',presentationRoutes);

app.listen(port, function() {
    console.log(`Server started on port ${port}`);
});


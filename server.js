const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const panelMemberRoutes = require("./routes/panel_member/panelMemberRoute");
const panelRoutes = require("./routes/panel_member/panelRoute");
const presentationRoutes = require("./routes/panel_member/presentationRoute");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();

app.use(express.static("public"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

//importing Routes
const imageUpload = require("./routes/admin/utils/imageUpload");

const port = process.env.PORT || 8000;
// app.use(cors());
// app.use(express.json());
app.use(morgan("dev"));
// app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected Successfully..");
  });

//routes middlware
app.use("/api", imageUpload); //image upload service Interface
app.use('/panelMember',panelMemberRoutes);
app.use('/presentation',presentationRoutes);
app.use('/panel',panelRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


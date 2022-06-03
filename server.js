const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const panelMemberRoutes = require("./routes/panel_member/panelMemberRoute");
const presentationRoutes = require("./routes/panel_member/presentationRoute");
const fileRoute = require("./routes/admin/file");
const authRoutes = require("./routes/auth/route");
const bodyParser = require("body-parser");
const CreateGroup = require("./routes/student/createGroupRout");
const Findtopic = require("./routes/student/findTopicRoute");
const Docsubmit = require("./routes/student/docSubmitRoute");
const docEvaluationRoutes = require("./routes/supervisors/docEvaluateRoutes");
const pdf = require("html-pdf");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 8000;

app.use(express.static("public"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({extended: true}));

const nodemailer = require("nodemailer");
// const pdfTemplate = require('./documents/panelpdf');

//importing Routes
const imageUpload = require("./routes/admin/utils/imageUpload");


// app.use(cors());
// app.use(express.json());
app.use(morgan("dev"));
// app.use(express.urlencoded({ extended: true }));

app.post("/sendmail", cors(), async(req,res)=>{

    let{text}  =req.body
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: process.env.MAIL_FROM,
            pass: process.env.MAIL_PASS
        }
    })
    transport.sendMail({
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_TO,
        subject: "Here is the Feedback",
        html: `<div classname="email" 
        style="border: 1px solid black;
        padding:20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px;
        ">
        <h2>Here is Your Email</h2>
        <p>${text}</p>
    
        <p>All the best, Panel Member</p>
        </div>`
    })
})

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
app.use("/api/auth", authRoutes); //auth service Interface
// app.use("/panel", panelRoutes);
app.use(fileRoute);
app.use('/panelMember',panelMemberRoutes);
app.use('/presentation',presentationRoutes);
app.use('/auth', authRoutes);
app.use('/create-pdf', (req,res)=>{
    pdf.create(pdfTemplate(req.data),{}).toFile('result.pdf',(err)=>{
        if(err){
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    });

});
app.use("/creategroup",CreateGroup) 
app.use("/findtopic",Findtopic)
app.use("/docsubmit",Docsubmit)
// app.use("/api/supervisors", supervisorRoutes);
app.use("/api/docEvaluation", docEvaluationRoutes);


app.listen(port, function() {
    console.log(`Server started on port ${port}`);
});

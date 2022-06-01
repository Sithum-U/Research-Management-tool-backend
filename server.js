const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const panelMemberRoutes = require("./routes/panel_member/panelMemberRoute");
const panelRoutes = require("./routes/panel_member/panelRoute");
const presentationRoutes = require("./routes/panel_member/presentationRoute");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
require("dotenv").config();
const port = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());
const authRoutes = require("./routes/auth/auth");

const nodemailer = require("nodemailer");
const pdfTemplate = require('./documents/panelpdf');

mongoose.connect(process.env.MONGO_URL, {useUnifiedTopology:true,
    useNewUrlParser:true,
}).then(() => {
    console.log("Database connected successfully")
});

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

app.use('/panelMember',panelMemberRoutes);
app.use('/presentation',presentationRoutes);
app.use('/panel',panelRoutes);
app.use('/auth', authRoutes);
app.use('/create-pdf', (req,res)=>{
    pdf.create(pdfTemplate(req.data),{}).toFile('result.pdf',(err)=>{
        if(err){
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    });
});

app.listen(port, function() {
    console.log(`Server started on port ${port}`);
});


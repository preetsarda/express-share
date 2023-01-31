const mongoose = require("mongoose");
const cors = require('cors');
const express = require("express");
const { User } = require("./models/user");
const { Event } = require("./models/eventcard");
const port = 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
mongoose.connect("mongodb+srv://user_1:kmit1@cluster0.o7yf1ms.mongodb.net/?retryWrites=true&w=majority", {
    useNewURLParser: true,
    useUnifiedTopology: true,
})
.then(()=>{console.log("Connected%%%%%%%%%%")});
app.get("/", function (req, res) {
    res.send("HELOOO");
});
app.get("/user", function (req, res) {
    res.send("HELOOO");

});
app.get("/user/add", function (req, res) {
    res.send("HUU");
});

app.post("/user/add", function (req, res) {
    console.log("in post (((((((((((((((((((((")
    console.log("8888888888888888"+ JSON.stringify(req.body));
    if (req.body) {
        const newuser = new User({
            email: req.body.email,
            pwd: req.body.pwd,
            access_code: 2,
        });
        newuser.save(function (err) {
            if (err) {
                throw err;
            } else {
                res.render("user");
            }
        }).then(() => console.log("SAved"));
    }
    else{
        console.log("E");
    }
});

    // .then(() => console.log("Database connection successful"))
    // .then(() => {
    //     const newuser = new User ({
    //         email: 'bingohaha@gmail.com',
    //         pwd: '43e333443',
    //         access_code: 2
    //     });
    //     const newEvent = new Event ({
    //         name: "Proschay Druz'YA",
    //         organiser: "KMIT",
    //         registrationlink: "www.accd.com",
    //         date: new Date("5-4-2021"),
    //         description: "FAR"
    //     })
    //     newuser.save()
    //         .then(() => console.log("Save Successful"));
    //     newEvent.save()
    //         .then(() => console.log("Save Successful"));
    // })
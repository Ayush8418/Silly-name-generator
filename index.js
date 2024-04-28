const express = require("express")
const sillyName = require("sillyname");
const date = require('date-and-time')

const app = express()
const Port = 3000;

const now = new Date();
const dateNow = date.format(now, 'ddd, MMM DD YYYY');

app.use(express.static("public"));

app.get("/" , (req,res) => {
    res.render("index.ejs" , {date : dateNow})
})
app.get("/click" , (req,res) => {
    const name = sillyName();
    res.render("index.ejs",{Name:name , date:dateNow})
})

app.listen(Port , () => console.log("server started at 3000 port"));


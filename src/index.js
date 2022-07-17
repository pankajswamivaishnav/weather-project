const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 8000;

//Public Static Path
const static_path = path.join(__dirname, "../public");
const template = path.join(__dirname, "../templates/views");
const partials = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', template);
app.use(express.static(static_path));
hbs.registerPartials(partials);

//Routing
app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/weather", (req, res)=>{
    res.render("weather");
});

app.get("/about", (req, res)=>{
    res.render("about");
});

app.get("*", (req, res)=>{
    res.render("404error");
});

app.listen(port, (req, res)=>{
  console.log(`are you listening the port ${port}`);
});
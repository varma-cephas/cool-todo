const express = require("express");
const path = require("path");

const app = express();
const PORT=3000;

//middlewares
app.use(express.static(path.join(__dirname,"./src")));

app.get("/", (req, res)=>{
    res.sendFile(__dirname,"","index.html");
})

app.listen(PORT, ()=>{
    console.log("Your app is listening on localhost:",PORT);
})
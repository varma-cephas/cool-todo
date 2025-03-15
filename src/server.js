import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";


const app = express();

//get port from env or use indicated port
const PORT= process.env.PORT || 3000;

//filepath from url of the current module
const __filename=fileURLToPath(import.meta.url);

// console.log("filename",__filename)
//get the directory name from the file path. stores the full path to the server file
const __dirname = dirname(__filename);


//middlewares
//express static server
app.use(express.static(path.join(__dirname, "../")));

//gets the form element
app.use(express.urlencoded({extended:true}))

app.post("/", async (req, res)=>{
    const todoItem= await req.body.todo_item;
    console.log(todoItem)
    res.status(200)
})


app.listen(PORT, ()=>{
    console.log("Your app is listening on localhost:",PORT);
})
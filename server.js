import express from "express";
import { fileURLToPath } from "url";
import { dirname , join } from "path";

const port = 3000;
const app = express();


const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(join(__dirname, 'public')));

app.get("/",(req,res) => {
    res.sendFile(__dirname + "/public/index.html")
})





app.listen(port,() => {
    console.log("Server running on port",port);
})
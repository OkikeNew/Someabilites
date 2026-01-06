import express from "express";
import dotenv from "dotenv";
import DBCON from "./config/db.js";
import Books from "./routes/bookRoute.js";
import cors from "cors";

dotenv.config();
DBCON();

const PORT = process.env.PORT;
const app = express();
app.use(cors({
    origin:"http://localhost:8000",
    methods:["GET","POST","DELETE","PATCH"],
    allowedHeaders:["Content-Type"]
}
));
app.use(express.json());
app.use("/books",Books);


app.listen(PORT,()=>{
    console.log(`SERVER ${PORT}. PORTTA ÇALIŞIYOR.`);
})
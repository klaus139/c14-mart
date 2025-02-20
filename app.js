import express from "express"
import dotenv from "dotenv"
dotenv.config();

const app = express()

const port = process.env.PORT || 4000;

//TODO configure database


//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}));



app.listen(port, () => console.log(`Server is running on port ${port}`))

import express from "express"
import dotenv from "dotenv"
dotenv.config();

import categoryRoutes from "./routes/categoryRoutes.js"
import connectDB from "./config/db.js";

const app = express()



const port = process.env.PORT || 4000;

//TODO configure database
connectDB();


//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}));

//routes
app.use('/api/category', categoryRoutes)



app.listen(port, () => console.log(`Server is running on port ${port}`))

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import { productRoute } from "./services/routes/product.route.js";
import { registerRoute } from "./services/routes/register.route.js";
import bodyParser from "body-parser"
import { loginRoute } from "./services/routes/login.route.js";
config()

const app = express()
app.use(bodyParser.json({ limit: '20mb' })); 
const port = 3001
app.use(cors());

app.use(express.json());

app.use("/products", productRoute)
app.use("/signup", registerRoute)
app.use("/login", loginRoute)

const router = express.Router();
router.get('/', (req, res) => {
  res.send('Hello World!')
})

const initServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("The server is connected to mongodb")
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } catch (error) {
    console.log("Connection Failed Error: ", error)
  }
}  

initServer();
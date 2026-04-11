require("dotenv").config()
const app = require("./src/app")
const cookieParser = require("cookie-parser")
app.use(cookieParser())
const cors = require("cors");


app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://genai-interviewprepration-production.up.railway.app",
  ],
  credentials: true
}));



const connectDB = require("./src/config/database")
connectDB()
 


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
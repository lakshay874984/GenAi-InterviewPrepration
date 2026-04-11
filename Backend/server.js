require("dotenv").config()
const app = require("./src/app")
const cookieParser = require("cookie-parser")
app.use(cookieParser())
const cors = require("cors");


const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true
  })
);



const connectDB = require("./src/config/database")
connectDB()
 


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://gen-ai-interview-prepration-3wqa.vercel.app",
    "https://gen-ai-interview-preprati-git-ca32b5-lakshays-projects-b3f27e96.vercel.app"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));   // handles preflight automatically — no app.options() needed

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./src/app");
app.use(routes);

const connectDB = require("./src/config/database");
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
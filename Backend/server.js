require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");

// Create app HERE, before importing routes
const app = express();

// ✅ Middleware FIRST — before any routes
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://gen-ai-interview-prepration-3wqa.vercel.app",   // ✅ no trailing slash
    "https://gen-ai-interview-preprati-git-ca32b5-lakshays-projects-b3f27e96.vercel.app" // ✅ added https://
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.options("*", cors()); // ✅ Handle preflight requests

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes AFTER middleware
const routes = require("./src/app"); // adjust if app.js exports a router
app.use(routes);

const connectDB = require("./src/config/database");
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API śmiga...");
});

app.use("/api/products/", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`serwer: port ${PORT}, tryb ${process.env.NODE_ENV}`.yellow.bold)
);

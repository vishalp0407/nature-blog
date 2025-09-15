import express from "express";
import dotenv from "dotenv";

import posts from "./data/posts.data.js";
import connectDB from "./config/db.config.js";

dotenv.config();
connectDB();

const app = express();

const PORT = 5000;
app.get("/", (req, res) => {
  res.send("server is running");
});

app.get("/api/v1/posts", (req, res) => {
  res.json(posts);
});

app.get("/api/v1/posts/:id", (req, res) => {
  const post = posts.find((p) => p._id === req.params.id);
  res.json(post);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

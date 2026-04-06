const express = require("express"); // 
const dotenv = require("dotenv");

dotenv.config(); // Load .env

const app = express();

const PORT = process.env.PORT;
const SECRET = process.env.SECRET_KEY;

app.get("/", (req, res) => {
  res.send("Server is running successfully : " + SECRET);
});

app.listen(PORT, () => {
  console.log("Server running on port :" + PORT);
});
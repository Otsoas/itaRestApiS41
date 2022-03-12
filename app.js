//
require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
//const userJson = require("./user.json");
const userRouter = require("./routes/userRouter");
const uploadRouter = require("./routes/uploadRouter");
const userDateRouter = require("./routes/userDateRouter");
const userDateAuthRouter = require("./routes/userDateAuthRoute");
const userDateAuthArrayRouter = require("./routes/userDateAuthArrayRoute");

//Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTES
//TODO Falta ruta principal, user
app.get("/", (req, res) => {
  res.status(200).json({ message: "Ruta principal apiRestServer" });
  console.log("Ruta principal API REST Server");
});

app.use(userRouter);
app.use(uploadRouter);
app.use(userDateRouter);
app.use(userDateAuthRouter);
app.use(userDateAuthArrayRouter);

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});

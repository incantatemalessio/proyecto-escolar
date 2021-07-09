const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors"); // html permissions
const passport = require("passport");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");

require("./passport/passport-local");
require("dotenv").config();

var app = express();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan("dev"));
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET", "POST", "DELETE", "PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requiested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static("public"));
// app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", userRoutes);
app.use("/", (req, res) => {
  res.status(200).send({ status: `The api is working ${new Date()}` });
});

app.listen(process.env.PORT, () => {
  console.log("Aplicacion corriendo en el puerto 3100");
});

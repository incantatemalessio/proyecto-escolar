const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");
const calificationRoutes = require("./routes/calificationRoutes");

require("./passport/passport-local");
require("dotenv").config();

var app = express();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan("dev"));
app.use(cors());
app.use(express.static("public"));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", userRoutes);
app.use("/api", calificationRoutes);

app.use("/", (req, res) => {
  res.status(200).send({ status: `The api is working ${new Date()}` });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Aplicacion corriendo en el puerto 3100");
});

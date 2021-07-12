const mongoose = require("mongoose");
const moment = require("moment");
const bcrypt = require("bcrypt");

moment.locale("es");

const userSchema = mongoose.Schema({
  email: { type: String },
  password: { type: String },
  name: { type: String },
  created: {
    type: String,
    default: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
  },
});

userSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("user", userSchema);

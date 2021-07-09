const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    email: { type: String },
    password: { type: String }
});

userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

userSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}


module.exports = mongoose.model("user", userSchema);
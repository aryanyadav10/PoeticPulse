const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: [true, "Email already exits!"],
    required: [true, "Email is required!"],
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;

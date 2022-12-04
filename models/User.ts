import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  phone: String,
});
module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
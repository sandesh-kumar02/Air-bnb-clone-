import mongoose from "mongoose";
import pkg from "passport-local-mongoose";
const passportLocalMongoose = pkg;

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
  },
  { timestamps: true }
);

const plugin = passportLocalMongoose.default || passportLocalMongoose;
userSchema.plugin(plugin);

const User = mongoose.model("User", userSchema);

export default User;

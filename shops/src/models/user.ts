import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      required: true,
    },
    photoURL: {
      type: String,
      required: true,
    },
    darkTheme: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);
export default User;

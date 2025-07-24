const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    googleId: { type: String, required: true, unique: true },
    notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Note", default: [] }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

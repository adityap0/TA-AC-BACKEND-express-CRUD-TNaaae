let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: String,
    age: Number,
    email: { type: String, required: true, match: /@/ },
  },
  { timestamps: true }
);

let User = mongoose.model("User", userSchema);
module.exports = User;

const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect("mongodb+srv://prasu202324:prasu2024@cluster0.fdal6ls.mongodb.net");

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profileImage: String,
  contact: Number,
  boards: {
    type: Array,
    default: []
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post"
    }
  ]
});

userSchema.plugin(plm, { usernameField: 'username' }); // Specify the username field

module.exports = mongoose.model("user", userSchema);

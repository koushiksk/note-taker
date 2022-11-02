const mongoose = require("mongoose");
const note = new mongoose.Schema({
  title: String,
  content: String,
});

module.exports = mongoose.model("Note", note);

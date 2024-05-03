const mongoose = require("mongoose");
const detailSchema = new mongoose.Schema({
  head: {
    type: String,
    required: true,
  },
  poem: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Poem = mongoose.model("Poem", detailSchema);
module.exports = Poem;

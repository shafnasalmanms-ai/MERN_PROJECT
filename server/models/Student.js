const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  usn: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  branch: {
    type: String
  }
});

module.exports = mongoose.model("Student", StudentSchema);
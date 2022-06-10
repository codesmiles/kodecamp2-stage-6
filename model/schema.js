const mongoose = require("mongoose");
const { Schema } = mongoose;

const mongooseSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: String
});

const MongooseModel = mongoose.model("user", mongooseSchema);
module.exports = MongooseModel;

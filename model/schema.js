const { default: mongoose } = require("mongoose");

const mongooseSchema = new mongoose.Schema({
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("schema", mongooseSchema);
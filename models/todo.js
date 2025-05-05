const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true
    },
    done:{
        type: Boolean,
        defalt: false
    }
});

module.exports = mongoose.model("Todo", todoSchema);